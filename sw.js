const CACHE_NAME = 'v1_cache_102';

let urlsToCache = [
    './', './css/index.css','./css/footer.css', './js/bootstrap.min.js', './css/bootstrap.min.css', './images/', './jquery.js', './main.js', './sw.js'
];

self.addEventListener('install', e => (
    e.waitUntil(
        caches.open(CACHE_NAME).then( cache => (
            cache.addAll(urlsToCache).then( () => {
                self.skipWaiting();
            })
        )).catch( err => {
            console.log(err)
        })
    )
))

self.addEventListener('activate', e => {
    const cacheWhiteList = [CACHE_NAME]
    e.waitUntil(
        caches.keys().then( cacheNames => {
            return Promise.all(
                cacheNames.map( cacheName => {
                    if( cacheWhiteList.indexOf(cacheName) === -1 ){
                        return caches.delelte(cacheName);
                    }
                })
            )
        }).then( () => {
            self.clients.claim();
        })
    )
})

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then( res => {
            if(res){
                return res;
            }
            return fetch(e.request);
        })
    )
})