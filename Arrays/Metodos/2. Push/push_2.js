// EJERCICIO 2

// Array tareasPendientes vacío:
const tareasPendientes = [];

// Añadimos 3 tareas usando push():
tareasPendientes.push("Sacar la basura");
tareasPendientes.push("Ir al banco");
tareasPendientes.push("Pasear al perro");

// Marcamos la primera tarea como realizada con shift():
tareasPendientes.shift(); //shift() elimina y devuelve la primer tarea

// Agregamos 1 tarea más al final:
tareasPendientes.push("Regar las plantas");

// Mostramos con un ciclo for..of:
for (let tarea of tareasPendientes) {
  console.log(tarea);
};