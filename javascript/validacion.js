let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
//validar login
const nombreLogin = document.getElementById('nombreLogin')
const emailLogin = document.getElementById('emailLogin')
// const btnLogin = document.getElementById('btnLogin')

function validarLogin(){
 let nombreLoginValor = nombreLogin.value
 let emailLoginValor = emailLogin.value
//  let btnLoginValor = btnLogin.value

    if (nombreLoginValor === null ||nombreLoginValor.length < 3) {
        alert('nombre Invalido')
        return false
    }
    else if (emailLoginValor === null || emailLoginValor.length >= 101) {
            alert('email no valido')
            return false
    }
    else if (!expresion.test(emailLoginValor)) {
            alert('email no valido')
            return false
    }
    else{
            console.log(emailvalor)
        }
 
}


//validar registro
const nombreRegistro = document.getElementById('nombreRegistro')
const emailRegistro = document.getElementById('emailRegistro')
const password = document.getElementById('passwordRegistro')
// const btnRegistro = document.getElementById('btnRegistro')
function validarRegistro(){
    let nombreRegistroValor = nombreRegistro.value
    let emailRegistroValor = emailRegistro.value
    let passwordValor = password.value
   //  let btnLoginValor = btnLogin.value
   
       if (nombreRegistroValor === null ||nombreRegistroValor.length < 3) {
           alert('nombre Invalido')
           return false
       }
       else if(password === null || password.length < 5){
            alert('password no valida')
            return false
       }
       else if (emailRegistroValor === null || emailRegistroValor.length >= 101) {
               alert('email no valido')
               return false
       }
       else if (!expresion.test(emailRegistroValor)) {
               alert('email no valido')
               return false
       }
       else{
               console.log(emailvalor)
           }
    
   }



//validar formulario de contacto
const nombreFormulario = document.getElementById('nombreForm')
const emailFormulario = document.getElementById('emailForm')
const contenidoFormulario = document.getElementById('contenidoForm')
const btnFormulario = document.getElementById('btnForm')

function validarFormulario(){
    let nombreFormularioValor = nombreFormulario.value
    let emailFormularioValor = emailFormulario.value
    let contenidoFormularioValor = contenidoFormulario.value
   //  let btnLoginValor = btnLogin.value
   
   if (nombreFormularioValor === null ||nombreFormularioValor.length < 3) {
        alert('nombre Invalido')
        return false
    }
    else if (emailFormularioValor === null || emailFormularioValor.length >= 101) {
        alert('email no valido')
        return false
}
    else if (!expresion.test(emailFormularioValor)) {
        alert('email no valido')
        return false
}
    else if(contenidoFormularioValor === null || contenidoFormularioValor.length >= 501){
    alert('Mensaje largo o invalido por favor escribelo de nuevo crack')
}
    else{
        console.log(emailvalor)
    }
    
   }
