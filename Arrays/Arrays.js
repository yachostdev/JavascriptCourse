/*  
    DEFINICIÓN
    En JavaScript, un arreglo es una variable que se utiliza para almacenar una colección de datos.
    Los arreglos pueden contener elementos de cualquier tipo, incluyendo números, cadenas, objetos, funciones, etc.
*/

/* 
    DECLARACIÓN
    Los arreglos se pueden crear de varias maneras:
*/

// Declarando una variable y asignando un valor inicial:

let miArreglo1 = [1, 2, 3];

// Usando la función Array():

let miArreglo2 = Array(1, 2, 3);

// Usando la función spread():

let miArreglo3 = [...[1, 2, 3]];


/*
    ACCESO
    Una vez creado un arreglo, se puede acceder a sus elementos utilizando índices numéricos.
    Los índices de los arreglos en JavaScript comienzan en 0, por lo que el primer elemento
    tiene el índice 0, el segundo elemento tiene el índice 1, etc.
*/

let miArreglo = [1, 2, 3];

console.log(miArreglo[0]); // 1
console.log(miArreglo[1]); // 2
console.log(miArreglo[2]); // 3