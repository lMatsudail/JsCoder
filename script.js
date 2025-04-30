// Declaración de una variable
let nombreUsuario = prompt("¿Cuál es tu nombre?");

// Declaración de una constante y un array
const mensajeBienvenida = "¡Hola, bienvenido!";
const numeros = [1, 2, 3, 4, 5];

// Función para saludar al usuario
function saludarUsuario(nombre) {
    console.log(mensajeBienvenida + " " + nombre);
}

// Condicional para verificar si el usuario ingresó un nombre
if (nombreUsuario) {
    saludarUsuario(nombreUsuario);
} else {
    console.log("No ingresaste un nombre.");
}

// Bucle para recorrer el array de números
for (let i = 0; i < numeros.length; i++) {
    console.log("Número en la posición " + i + ": " + numeros[i]);
}