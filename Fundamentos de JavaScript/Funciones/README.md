# Funciones

Las funciones son bloques de código que se pueden reutilizar. Se definen una vez y se pueden ejecutar (o invocar) tantas veces como sea necesario.

Para definir una función se utiliza la palabra clave **`function`** seguida de:

* El nombre de la función.

* Una lista de parámetros entre paréntesis (opcional).

* Las llaves **`{ }`** que contienen las sentencias de código de la función.

Por ejemplo:

```javascript
function saludar(nombre) {
  console.log("Hola " + nombre);
}
```

Para ejecutar o invocar esta función se escribe el nombre seguido de paréntesis:

```javascript
saludar("Juan"); // Imprime "Hola Juan"
```

Dentro de una función se pueden utilizar los parámetros para operar con los datos que se pasan a la función. Por ejemplo:

```javascript
function suma(a, b) {
  return a + b; 
}

let resultado = suma(2, 3); // resultado = 5
```

Algunas cosas importantes de las funciones:

* Se pueden reutilizar invocándolas desde cualquier parte del código.

* Se pueden organizar en el código para hacerlo más legible.

* Permiten encapsular código en tareas específicas.