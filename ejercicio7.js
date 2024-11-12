// Contar la cantidad de números en una cadena

let text = "ethte57h46et8h4erdt685h74ets948herssh74et";  // Declara la variable 'text' con la cadena que contiene números y letras

function countNumbers(text) {           // Define la función 'countNumbers' que toma un parámetro 'text'
    let count = 0;                      // Inicializa la variable 'count' en 0 para contar los números

    for (let i = 0; i < text.length; i++) {   // Recorre cada carácter en 'text'
        if (!isNaN(text[i])) {               // Verifica si el carácter actual es un número
            count++;                         // Si es un número, incrementa el contador 'count'
        }
    }

    return count;                            // Devuelve el número total de números en 'text'
}

// Esta función recorre cada carácter de la cadena y comprueba si es un número.     
// Si es un número, aumenta el contador.
// Cuando ha recorrido todo el texto, devuelve el número de números.

console.log(countNumbers(text)); // Llama a la función y muestra en consola el número de números encontrados en 'text'
