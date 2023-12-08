// EJERCICIO 1

// Array inicial con 3 productos:
const productosTienda = ['Leche', 'Café', 'Azúcar'];

// Agregamos 2 productos más con push():
productosTienda.push('Aceite');
productosTienda.push('Pan');

// Quitamos 1 producto con pop():
productosTienda.pop(); // Se quita pan

// Mostramos el inventario resultante con for:
for(let i = 0; i < productosTienda.length; i++) {
    console.log(productosTienda[i]);
  }
