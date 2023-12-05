// EJERCICIO 1

// Declaramos el array vacío inicial:
const productos = []

// Insertamos 10 elementos con un bucle for:
for(i = 0; i < 10; i++) {
    productos.push(prompt("Ingrese un producto: "))
}

//Imprimimos la longitud (debería dar 10):
console.log(productos.length)

//Accedemos a un índice para verificar:
console.log(`El producto en el indice 4 es el: ${productos[4]}.`)

// Agregamos 2 elementos más:
console.log("Ingresa dos productos mas")
productos.push(prompt("Ingrese un producto: "))
productos.push(prompt("Ingrese un producto: "))

//Revisamos nuevamente el arreglo (ahora 12):
console.log(`Ahora hay en total: ${productos.length} productos.`)

//Iteramos con length en el bucle:
for(let i = 0; i < productos.length; i++) {
  console.log(productos[i]);
}
