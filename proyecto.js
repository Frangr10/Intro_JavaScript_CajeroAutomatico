
var cuentas = [
    { nombre: 'Mali', saldo: 200, password: "1234" },
    { nombre: 'Gera', saldo: 290, password: "1234d" },
    { nombre: 'Maui', saldo: 67, password: "1234" },
    { nombre: 'Pedro', saldo: 500, password: "pedrito" },
    { nombre: 'Maria', saldo: 600, password: "asdf" },
    
    { nombre: 'Eunice', saldo: 100, password: "0000" }
]
let intentos = 3
borrarInfo = document.querySelector("#infoDatos")
borrarBotones = document.querySelector("#botonDatos")



/*---------------------------- Listener pa ingreso de usuario---------------------------*/

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



/* ----------------------------------------------- Cambio de pantalla ------------------------------------------- */

function pantallaSaldos(){


/*-------------------------------- Creamos contenido nuevo ----------------------------------*/

    /*-------------------------------- Creamos mensaje y mostramos saldo ----------------------------------*/
    document.querySelector("#informacion").innerHTML = 
    "<div id='cuenta' class='container'> <p>Bienvenido <b>" + buscador.nombre + "</b> tu saldo es:</p> </div>" +
    "<p class='container'> $" + buscador.saldo + "</p>"


    /*--------------------------- Creamos botones: Ingresar, retirar y salir -------------------------------*/
    document.querySelector("#botones").innerHTML = 
    `<div id="botones2" class="container"> <button id="ingresarSaldo" class="btn btn-primary"> Ingresar saldo </button>   <button id="retirarSaldo" class="btn btn-primary"> Retirar saldo </button>   <button id="cancelar" class="btn btn-primary"> Salir </button></div>`


/*------------------------------------- Creamos eventos ------------------------------------*/
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



/*-------------------------------- Creamos funcion para deposito ----------------------------------*/

function deposito() {

/*-------------------------------- Creamos contenido nuevo ----------------------------------*/

    /*------------------- Creamos input de cantidad -------------------*/
    document.querySelector("#informacion").innerHTML = 
    "<input id='cantidadDeposito' class='form-control inputMonto' type='number' placeholder='Cantidad a depositar'>"

    /*----------- Creamos boton de depositar y cancelar --------------*/
    document.querySelector("#botones").innerHTML = 
    `<div id="botones2" class='container'> <button id="ingresarSaldo" class="btn btn-primary"> Depositar </button>   <button id="cancelar" class="btn btn-primary"> Cancelar </button></div>`
    

    /*------------------ Listener de cancelacion ---------------------*/
    document.querySelector("#cancelar").onclick = () => {
        pantallaSaldos()
    }

    /*---------------------Creamos eventos para deposito -------------------*/
    document.querySelector("#ingresarSaldo").onclick = ()=> {
        const montoDeposito = document.querySelector("#cantidadDeposito").value
        console.log(buscador.saldo)
        console.log("depositaras: " + montoDeposito)
        let resultadoDeposito = parseFloat(buscador.saldo) + parseFloat(montoDeposito)
        console.log(resultadoDeposito)

        if (!isNaN (resultadoDeposito)){
            
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
        }else{
            alert("Has ingresado un dato invalido o no has ingresado un monto a depositar")
            pantallaSaldos()
        }
            
    }

    
}



/*-------------------------------- Funcion para retirar ----------------------------------*/

function retiro() {

    /*------------------- Creamos input de cantidad -------------------*/
    document.querySelector("#informacion").innerHTML = 
    "<input id='cantidadRetiro' class='form-control inputMonto' type='number' placeholder='Cantidad a retirar'>"

    document.querySelector("#botones").innerHTML = 
    `<div id="botones2" class='container'> <button id="retirarSaldo" class="btn btn-primary"> Retirar </button>   <button id="cancelar" class="btn btn-primary"> Cancelar </button></div>`
    
    document.querySelector("#cancelar").onclick = () => {
        pantallaSaldos()
    }






    document.querySelector("#retirarSaldo").onclick = ()=> {
        const montoRetiro = document.querySelector("#cantidadRetiro").value
        console.log(buscador.saldo)
        console.log("retiraras: " + montoRetiro)
        let resultadoRetiro = parseFloat(buscador.saldo) - parseFloat(montoRetiro)
        console.log(resultadoRetiro)

        if (!isNaN (resultadoRetiro)){

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
        }else{
            alert("Has ingresado un dato invalido o no has ingresado un monto a retirar")
            pantallaSaldos()
        }
    }
}