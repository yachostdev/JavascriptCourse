// EJERCICIO 2

// Declaramos el array agenda vacío:
const agenda = [];

// Bucle while para solicitar contactos con prompts:
let cantidadContactos = 0;

while (cantidadContactos < 3) {
  let nombreContacto = prompt("Ingresa el nombre del contacto: ");
  let telContacto = prompt("Ingresa el teléfono del contacto: ");

  agenda.push({ nombre: nombreContacto, numero: telContacto });
  cantidadContactos++;
}

// Mostramos la cantidad de contactos con length:
console.log(`La cantidad de contactos en la agenda son: ${agenda.length}`);

// Recorremos y mostramos todos los contactos con un bucle y length:
for (let i = 0; i < agenda.length; i++) {
  console.log(`Nombre: ${agenda[i].nombre} - Teléfono: ${agenda[i].numero}`);
}
