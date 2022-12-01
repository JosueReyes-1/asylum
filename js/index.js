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