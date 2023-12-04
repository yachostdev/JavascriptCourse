# Método length

El método **`length`** es un método de los arreglos en JavaScript. Este método devuelve el número de elementos que contiene el arreglo.

La sintaxis del método **`length`** es la siguiente:

    > arreglo.length

Por ejemplo:

    > let miArreglo = [1, 2, 3];

    > console.log(miArreglo.length); // 3

El método **`length`** también se puede utilizar para establecer el número de elementos que contiene el arreglo. Sin embargo, esto puede provocar que se pierdan datos.

La sintaxis para establecer el número de elementos del arreglo es la siguiente:

    > arreglo.length = nuevoTamaño;

Por ejemplo:

    > let miArreglo = [1, 2, 3];

    > miArreglo.length = 2; // Se eliminan los elementos 2 y 3 del arreglo

    > console.log(miArreglo); // [1, 2]   

## Ejemplos de uso

Aquí hay algunos ejemplos de cómo se puede utilizar el método **`length`** en JavaScript: