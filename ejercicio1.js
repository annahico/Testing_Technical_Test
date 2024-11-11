// Dada una cadena de TextDecoder, comprobar si e sun palíndromo o Node. No usar funciones de JS, solo estrucutras de control 

// Los palíndromos son palabras que se leen igual aún estando invertidas
// Por ejemplo: Anna, bob, otto, allivessevilla

// Ejemplos:
// esPalindromo("otto") // devuelve: True
// esPalindromo("victor") // devuelve: False

function esPalindromoConFunciones(palabra) {
    let invertida = palabra.split("").reverse().join("");
    return (invertida === palabra);
}



function esPalindromo(palabra) {  // Definimos la función que recibe una palabra
    let letras = [];  // Creamos un array vacío para almacenar cada letra de la palabra
    for (let i = 0; i < palabra.length; i++) {  // Recorremos cada letra de la palabra
        letras.push(palabra[i]);  // Añadimos cada letra al array 'letras'
    }
    let letrasInvertidas = [];  // Creamos un array vacío para almacenar las letras en orden inverso
    for (let i = letras.length - 1; i >= 0; i--) {  // Recorremos el array 'letras' desde el final al inicio
        letrasInvertidas.push(letras[i]);  // Añadimos cada letra al array 'letrasInvertidas'
    }
    let palabraInvertida = "";  // Creamos una variable para almacenar la palabra invertida
    for (let i = 0; i < letrasInvertidas.length; i++) {  // Recorremos el array 'letrasInvertidas'
        palabraInvertida += letrasInvertidas[i];  // Añadimos cada letra a la cadena 'palabraInvertida'
    }
    return (palabra === palabraInvertida);  // Comparamos la palabra original con la invertida y devolvemos true o false
}

console.log(esPalindromo("otto")); // Imprime true porque "otto" es un palíndromo
console.log(esPalindromo("victor")); // Imprime false porque "victor" no es un palíndromo
console.log(esPalindromo("anna")); // Imprime true porque "anna" es un palíndromo



