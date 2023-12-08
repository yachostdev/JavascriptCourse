// EJERCICIO 3

// Array carrito inicialmente vacío
const carritoCompras = [];

// Funcion para agregar productos
function agregarProducto(nombre, precio){
    const producto = {
        nombre: nombre,
        precio: precio
    }

    carritoCompras.push(producto);

    console.log("Producto agregado");
    console.log(`Productos en el carrito: ${carritoCompras.length}`);
}

// Invocamos 5 veces agregando productos inventados:
agregarProducto("Vino tinto", 80.000);
agregarProducto("Vino blanco", 60.000);
agregarProducto("Vino dulce", 60.000);
agregarProducto("Vino seco", 90.000);
agregarProducto("Vino semi seco", 90.000);