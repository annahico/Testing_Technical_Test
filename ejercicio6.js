// contador de palabras

let text = "una frase tiene palabras ";
let n = 0;

text = text.trim();  // para que no cuente los espacios como una palabra
const words = text.split(' ');
n = words.length;

console.log(`La frase tiene ${n} palabras.`);