// Calcular la distancia de Hamming entre dos cadenas

let text1 = "patitos";             // Declara la primera cadena de texto
let text2 = "patitas";             // Declara la segunda cadena de texto
let distance = 0;                  // Inicializa la variable 'distance' en 0 para contar las diferencias

// Verifica si ambas cadenas tienen la misma longitud
if (text1.length !== text2.length) {
    throw new Error("Both texts must have the same length");  // Lanza un error si las longitudes no coinciden
}

// Recorre cada carácter de las cadenas
for (let i = 0; i < text1.length; i++) {
    if (text1.charAt(i) !== text2.charAt(i)) {   // Compara los caracteres en la misma posición de ambas cadenas
        distance++;                              // Incrementa 'distance' si los caracteres son diferentes
    }
}

console.log("Distancia de Hamming: " + distance);  // Imprime la distancia de Hamming en la consola
