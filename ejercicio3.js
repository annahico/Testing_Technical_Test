// Invertir una cadena de texto 


let text = "hola";              // Declara una variable 'text' con el valor "pato"
let textResult = "";             // Declara una variable 'textResult' para almacenar el resultado invertido

for (let i = 0; i < text.length; i++) {  // Itera a través de cada carácter en 'text'
    textResult = text[i] + textResult;     // Agrega el carácter actual al inicio de 'textResult', invirtiendo el orden
}

console.log(textResult);         // Imprime el resultado invertido en la consola
