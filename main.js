if('serviceWorker' in navigator){
    console.log('Puedes usar serviceWorker');
    navigator.serviceWorker.register('./sw.js')
                            .then(res=>console.log('Ya se cargo el serviceworker', res)).catch(err=>console.log('Error al cargar el serviceworker', err))
} else {
    console.log('No puedes usar los ServiceWorker')
}

