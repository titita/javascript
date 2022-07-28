
//complementario elegido: pedir un numero y devolver la palabra hola por consola la cant de veces ingresado//

let numeroIngresado = 0;
let i = 0;

function mensaje (numeroIngresado) {
    numeroIngresado = parseInt(prompt("ingrese un numero porfavor"));
    for (i= 0; i < numeroIngresado; i++) {
        console.log("hola");
    }
    return numeroIngresado
}

mensaje (numeroIngresado);