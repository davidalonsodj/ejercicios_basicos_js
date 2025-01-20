const jedi = {nombre: "Luke Skywalker", edad: 19};

// Tu código para cambiar la edad aquí...

jedi.edad =25;

console.log (jedi);

const nombre ="Leia";
const apellido ="Organa";
const edad= 20;

const mensaje = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan";

console.log(mensaje)

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

// Tu código para calcular el precio total aquí...

const preciototal = sable1.precio + sable2.precio;

console.log(preciototal)

let precioBaseGlobal = 25000;

// Cambia el precio base en esta linea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

// Tu código para actualizar el precio final de cada nave aquí...

const preciofinal1= nave1.precioBase+precioBaseGlobal;
const preciofinal2= nave2.precioBase+precioBaseGlobal;

console.log(preciofinal1);
console.log(preciofinal2);