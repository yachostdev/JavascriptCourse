# map()

El método **`map()`** es muy útil para procesar y transformar todos los elementos de un array en JavaScript.

```javascript
const nuevoArray = arr.map(function(elemento) {
  //Aquí se transforma cada elemento  
  return elementoTransformado; 
});
```
Map iterará el array original, aplicará la función que le pasemos a cada elemento, transformándolo según nuestra lógica, y devolverá un nuevo array con los elementos mapeados o transformados.

Un ejemplo sencillo:

```javascript
const numeros = [1, 2, 3, 4];

const numerosDobles = numeros.map(function(num) {
  return num * 2; //num se duplica
});

console.log(numerosDobles); //[2, 4, 6, 8]
```

Otro uso común es transformar objetos de un array. Por ejemplo, podríamos crear un array sólo con los nombres de personas:

```javascript
const personas = [{nombre: 'Juan'}, {nombre: 'Lucía'}]

const nombres = personas.map(function(persona) {
  return persona.nombre; 
});

console.log(nombres); //['Juan', 'Lucía']
```

Como ves, **`map()`** permite rápidamente procesar y convertir los datos de un array en uno nuevo. Es una herramienta muy útil en el desarrollo.

Puedes imaginar **`map()`** como una máquina que toma un array, procesa cada elemento de alguna forma, y luego escupe o devuelve un nuevo array con los elementos procesados.

Por ejemplo, imagina una máquina que hace copias en blanco y negro. Le metes un array de fotos a color y la máquina **`map()`** las procesa así:

1. Toma la primera foto a color.
2. La convierte a blanco y negro (la procesa).
3. Pone esta copia b&n en el array resultado.

Luego pasa a la siguiente:

4. Toma la segunda foto en color.
5. La convierte a blanco y negro (la procesa).
6. Agrega esta copia al array resultado.

Y así con cada elemento, aplicando siempre la misma transformación o procesamiento que definamos.

Al final obtienes un nuevo array con las versiones procesadas de cada elemento. Esta es la idea central detrás de **`map()`**.

A continuación un ejemplo súper sencillo del uso de **`map()`** en arrays:

Digamos que tienes una lista de nombre de frutas:

```javascript
const frutas = ['Banano', 'Manzana', 'Pera'];
```

Lo que **`map()`** hará es transformar cada elemento según la lógica que le indiquemos. Por ejemplo, para agregar signos "!" a cada fruta:

```javascript
const frutasExclamadas = frutas.map(function(fruta) {
  return fruta + '!';  
});

// frutasExclamadas es ['Banano!', 'Manzana!', 'Pera!']
```

Como ves:

1. Se itera cada elemento de frutas (el array original)
2. A cada elemento (Banano, Manzana, etc) se le agrega un signo "!"
3. Se retorna este nuevo valor
4. Finalmente se crea un array con las frutas ya transformadas