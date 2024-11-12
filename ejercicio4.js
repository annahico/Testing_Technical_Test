// Contar las veces que se repite un carácter en una cadena


let text = "woiytgfwejkhfijewghaaayayaya";  // Declara la variable 'text' con la cadena donde se buscará el carácter
let character = "a";                        // Declara la variable 'character' con el carácter a contar
let count = 0;                              // Inicializa la variable 'count' en 0 para contar las apariciones

for (let i = 0; i < text.length; i++) {     // Itera a través de cada carácter en 'text'
    if (text[i] === character) {            // Verifica si el carácter actual coincide con 'character'
        count++;                            // Si coincide, incrementa el contador 'count'
    }
}

console.log("Cuantas veces se repite la letra a:", count);  // Muestra el número total de repeticiones de 'character'
