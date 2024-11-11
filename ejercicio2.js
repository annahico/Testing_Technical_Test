// Dado un número, mostrar su serie de fibonacci.DadoLa serie de fibonacci es un orden de números donde cada número es la suma de los dos anteriores.


// Ejemplos:
// fib(10)[0]
// fib(19)[1]

// Serie completa: 0,1,1,2,3,5,8,13,21,34,55
// Resultado de la serie fibonacci: 55


// Como hacerlo:
// - Crear una función con parámetro número
// - Crear variable con dos primeros números de la serie
// - Bucle desde dos al número 
// - Sumar los dos anteriores valores al número actual
// - Devolver el resultado 


function fibonacci(numero) {                 // Define la función 'fibonacci' que toma un número como parámetro
    let serie = [0, 1];                      // Inicializa la serie de Fibonacci con los dos primeros números: 0 y 1
    for (let i = 2; i <= numero; i++) {      // Inicia un bucle desde 2 hasta el valor de 'numero'
        serie.push(serie[i - 1] + serie[i - 2]); // Agrega a la serie el siguiente número, sumando los dos anteriores
    }
    return [serie, serie[numero]];           // Retorna un array con la serie completa y el valor en la posición 'numero'
}
// Muestra en la consola la serie completa de Fibonacci hasta el índice especificado
console.log("Serie completa: ", fibonacci(10)[0]);
// Muestra en la consola el valor de Fibonacci en la posición 'numero' (en este caso, 10)
console.log("Resultado de la serie fibonacci: ", fibonacci(10)[1]);


