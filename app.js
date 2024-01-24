// Llamado de las funciones.

let numeroOculto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


console.log(numeroOculto);

// Función verificar intento:

function verficarIntento(){
    let numeroUsuario = document.getElementById("valorUsuario").value; // getElementById: Consultar por ID.
                                                                       // .value = extrae el valor del elemento.                                                                 
    if(numeroUsuario == numeroOculto){
        asignarTextoElemento("p", `¡Acertaste el número secreto en ${intentos} ${intentos == 1 ? "vez" : "veces"}!`);
                                                                                // ? es como if y : es como else.
        document.getElementById("reiniciar").removeAttribute("disabled"); // .removeAttribute = remueve el atributo según la id dada.
    }                                                                           
    else{
        //----------------------------------------------------------//
        if(numeroUsuario > numeroOculto){
            asignarTextoElemento("p", "El numero secreto es menor");
        }

        else{
            asignarTextoElemento("p", "El numero secreto es mayor");
        }  
        //----------------------------------------------------------//
        intentos++;
        limpiarCaja();
    }
        
    return;
    }

// Función limpiar caja de texto:

function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

// Función reniciar juego:

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true"); //.setAtrribute: Asignar atributo al elemento. Recibe dos 
                                                                           // paramatros ("elemento", "accción").
}

// Función asignar texto a elementos HTML:

function asignarTextoElemento(elemento, texto){
    elementoHTML = document.querySelector(elemento); // querySelector(elemento): Selecciona el elemento en el archivo HTML.
    elementoHTML.innerHTML = texto;
    return;
}

// Función generar numero oculto:

function generarNumeroOculto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    // Preguntamo si ya se sortearon todos los números, para acabar con la recursividad.
    if(listaNumeroSorteado.length == numeroMaximo){
        asignarTextoElemento('p', "¡Alcanzaste el número máximo de números sorteados!");
    }
    else{
    //----------------------------------------------------------//
        // Ya esta incluido.
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return generarNumeroOculto(); // Recursividad, llega un elemento y si esta incluido, llama de nuevo la función.
        }
        else{
            // console.log(listaNumeroSorteado);
            listaNumeroSorteado.push(numeroGenerado); // Agrega el número a lista.
            return numeroGenerado;
    }
    //----------------------------------------------------------//
    }
 
}

// Función condiciones iniciales:

function condicionesIniciales(){
    asignarTextoElemento('h1', "¡Juego del número secreto!");
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}:`);
    numeroOculto = generarNumeroOculto();
    intentos = 1;
}

condicionesIniciales();


