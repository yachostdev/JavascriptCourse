// EJERCICIO 1

// Función que recibe el array a duplicar. Dentro, utilizamos map() para transformar cada número:
function duplicarNumeros(numeros) {
    const duplicados = numeros.map(function(n) {
    
        // Duplicamos el valor    
        return n * 2;
    
      });
      
      // Devolvemos el array resultado
      return duplicados;
};

// Ejemplo de uso:

const nums = [1, 3, 5];
const resultado = duplicarNumeros(nums); 

console.log(resultado); // [2, 6, 10]