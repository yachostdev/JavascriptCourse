# push()

El método **`push()`** es muy útil para trabajar con arrays en JavaScript. Es uno de los métodos más utilizados para agregar elementos.

Puedes entender el funcionamiento de **`push()`** como una forma de añadir **"un elemento al final"** del arreglo. Imagina el array como una caja donde vas apilando elementos nuevos. Ese es el concepto clave con **push.**

La sintaxis es muy fácil:

```javascript
miArray.push(elemento);
```
Por ejemplo, si tienes un array vacío de nombres:

```javascript
const nombres = [];
```
Puedes agregar elementos así:

```javascript
nombres.push('Juan'); 
nombres.push('Pedro');
nombres.push('Luis');
```

Cada vez que haces **push**, el nuevo elemento es agregado al final (como apilándolo).

Algunas características interesantes de **`push()`**:

* Devuelve la nueva longitud del array tras agregar elementos.
* Puedes agregar uno o más elementos separados por comas.
* Por ser un "mutator method", modifica el array original.

Es uno de los métodos más usados y una forma muy sencilla de agregar los elementos que necesites.