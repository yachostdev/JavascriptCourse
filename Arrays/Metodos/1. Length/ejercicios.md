## Problema 1 - Lista de compras

1. Crea un array llamado "listaDeCompras" que contenga 10 productos (ej: huevos, leche, pan, etc).
2. Utiliza un bucle for para insertar 10 elementos, asignando valores de forma programática.
3. Imprime en consola el número total de elementos que tiene el array utilizando la propiedad **`length`** .
4. Comprueba que efectivamente tiene 10 elementos accediendo directamente a alguno de los índices entre 0 y 9.
5. Agrega 2 elementos más al array con algún método visto anteriormente.
6. Vuelve a imprimir la **`length`**  para verificar que ahora hay 12 productos.
7. Utiliza **`length`**  dentro de un bucle para recorrer cada elemento del array.

### Objetivo:

* Practicar la propiedad **`length`** .
* Comprobar que **`length`**  devuelve el número real de elementos.
* Iterar arrays en base a su longitud.
* Actualizar la longitud al agregar o quitar elementos.


## Problema 2 - Agenda telefónica

Desarrolla una agenda telefónica básica que cumpla los siguientes requisitos:

1. Define un array "agenda" inicialmente vacío.
2. Utiliza un bucle while para solicitar al usuario que ingrese nombres y números de teléfono. Cada iteración representa un contacto.
3. Guarda cada contacto en el array "agenda". Debes crear un objeto contacto en cada iteración.
4. El bucle debe finalizar cuando se ingresen 3 contactos.
5. Al terminar, utiliza la propiedad length para indicar cuántos contactos hay registrados.
6. Por último, utiliza **`length`** en un bucle para mostrar los datos completos de cada contacto guardado.

### Objetivo:

* Practicar interacción con prompts y alerts
* Almacenar información en arrays
* Detener bucles en base a condiciones
* Aplicar length para simplify recorrer arrays


## Problema 3 - Carrito de compras básico

### Problema:
Crea una aplicación que sirva como carrito de compras básico para una tienda de vinos.

1. Define un array "carritoCompras" que inicialmente debe estar vacío.
2. Agrega una función "agregarProducto" que reciba el nombre y el precio del producto, lo almacene como objeto en el array "carritoCompras".
3. Invoca esta función al menos 5 veces para agregar 5 productos al azar (inventa sus nombres y precios).
4. Cada vez que se agregue un producto, muestra el mensaje "Producto agregado!" y la cantidad de productos en el carro, leyendo la propiedad **`length`**
5. Al final, utiliza **`length`** dentro de un ciclo para mostrar el nombre y el precio de cada producto en el carrito.

### Objetivo:

* Reforzar los conceptos de arrays, funciones y objetos
* Manipular arrays invocando funciones
* Usar length para saber el total de productos
* Recorrer arrays con length en los ciclos