import {savetask} from './firebase.js'

window.addEventListener('DOMContentLoaded',()=>{

})

const taskForm =document.getElementById('contact-form');

taskForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('submit')
    const nombre= taskForm['form_name']
    const email=taskForm['form_email']
    const mensaje=taskForm['form_message']

    savetask(nombre.value,email.value,mensaje.value)
})

$(document).ready(function () {
    //Click al boton para pedir permisos
    $("#pedirvan").click(function () {
        //Si el navegador soporta geolocalizacion
        if (!!navigator.geolocation) {
            //Pedimos los datos de geolocalizacion al navegador
            navigator.geolocation.getCurrentPosition(
                    //Si el navegador entrega los datos de geolocalizacion los imprimimos
                    function (position) {
                        window.alert("nav permitido");
                        $("#nlat").text(position.coords.latitude);
                        $("#nlon").text(position.coords.longitude);
                    },
                    //Si no los entrega manda un alerta de error
                    function () {
                        window.alert("nav no permitido");
                    }
            );
        }
    });

});
