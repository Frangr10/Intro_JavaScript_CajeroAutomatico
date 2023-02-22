
var cuentas = [
    { nombre: 'Mali', saldo: 200, password: "1234" },
    { nombre: 'Gera', saldo: 290, password: "1234d" },
    { nombre: 'Maui', saldo: 67, password: "1234" },
    { nombre: 'Pedro', saldo: 500, password: "pedrito" },
    //{ nombre: 'Maria', saldo: 600, password: "asdf" }
]
let intentos = 3
borrarInfo = document.querySelector("#infoDatos")
borrarBotones = document.querySelector("#botonDatos")



/*---------------------------- Listener ---------------------------*/

document.querySelector("#ingresar").onclick = () => {
    
    /* Asignacion de variables de validacion*/

    const campoUsuario = document.querySelector("#user").value;
    const campoPassword = document.querySelector("#password").value;
    buscador = cuentas.find((elemento) => elemento.nombre == campoUsuario )
    
    /* Autenticador de usuario y contraseña*/

    if (campoUsuario == buscador.nombre && campoPassword == buscador.password){
        console.log("Bienvenido");
        pantallaSaldos()
    }else{
        alert("Datos invalidos tienes " + intentos + " restantes")
        intentos--
        console.log("error")
        console.log(intentos)
        if (intentos == 0){
            alert("Error")
            intentos = 3
        }
    }
}



/* ---------------------------- Cambio de pantalla ------------------------- */

function pantallaSaldos(){


    /*------------------- Creamos botones -------------------*/
    document.querySelector("#informacion").innerHTML = 
    "<div id='cuenta'> <p>Tu  saldo es: $" + buscador.saldo + "</p> </div>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2"> <button id="ingresarSaldo"> Ingresar saldo </button>   <button id="retirarSaldo"> Retirar saldo </button>   <button id="cancelar"> Cancelar </button></div>`


    /*---------------------Creamos eventos -------------------*/
    document.querySelector("#ingresarSaldo").onclick = () => {
        deposito()
        console.log("intentas ingresar")
    }
    
    document.querySelector("#retirarSaldo").onclick = () => {
        retiro()
        console.log("intentas retirar")
    }

    document.querySelector("#cancelar").onclick = () => {
        window.location ="index.html"
    }
}



function deposito() {

    /*------------------- Creamos botones -------------------*/
    document.querySelector("#informacion").innerHTML = 
    "<input id='cantidadDeposito' placeholder='Cantidad a depositar'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2"> <button id="ingresarSaldo"> Depositar </button>   <button id="cancelar"> Cancelar </button></div>`
    
    document.querySelector("#cancelar").onclick = () => {
        pantallaSaldos()
    }

    /*---------------------Creamos eventos -------------------*/
    document.querySelector("#ingresarSaldo").onclick = ()=> {
        const montoDeposito = document.querySelector("#cantidadDeposito").value
        console.log(buscador.saldo)
        console.log("depositaras: " + montoDeposito)
        let resultadoDeposito = parseFloat(buscador.saldo) + parseFloat(montoDeposito)
        console.log(resultadoDeposito)
        if (resultadoDeposito > 990){
            console.log("mucho dinero")
            console.log(cuentas)
            alert("Superas el limite por cuenta")
            pantallaSaldos()
        }else{
            console.log("tu saldo es: $"+ resultadoDeposito)
            buscador.saldo = resultadoDeposito
            pantallaSaldos()
            console.log (buscador)
            console.log(cuentas)
            }
            
    }

    
}





function retiro() {

    /*------------------- Creamos botones -------------------*/
    document.querySelector("#informacion").innerHTML = 
    "<input id='cantidadRetiro' placeholder='Cantidad a retirar'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2"> <button id="retirarSaldo"> Retirar </button>   <button id="cancelar"> Cancelar </button></div>`
    
    document.querySelector("#cancelar").onclick = () => {
        pantallaSaldos()
    }






    document.querySelector("#retirarSaldo").onclick = ()=> {
        const montoRetiro = document.querySelector("#cantidadRetiro").value
        console.log(buscador.saldo)
        console.log("retiraras: " + montoRetiro)
        let resultadoRetiro = parseFloat(buscador.saldo) - parseFloat(montoRetiro)
        console.log(resultadoRetiro)
        if (resultadoRetiro < 10){
            console.log("poco dinero")
            console.log(cuentas)
            alert("Superas el limite minimo por cuenta")
            pantallaSaldos()
        }else{
            console.log("tu saldo es: $"+ resultadoRetiro)
            buscador.saldo = resultadoRetiro
            pantallaSaldos()
            console.log (buscador)
            console.log(cuentas)
            }
        }
}