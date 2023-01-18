"use strict";

console.log(`Hola mundo`);
console.log("Hola mundo");
console.log('Hola mundo');

var nombre = "Juan";    // se puede reasignar pero no se recomienda su uso ya que su alcance es global.
var edad = 30;

const fechaNacimiento = "17/08/1993"; // no se puede reasignar (no debería)

let apellido ="Perez"; // se puede reasignar
console.log('apellido');

let nombreCompleto = "Leopoldo Ramírez";    // String (texto)
let telefono = 123;     // Number (número)
let humano = true;  //Boolean (true/false)
let direccion; // undefined (Que no se le ha asignado un valor)
let codigoPostal = null; //null que no tiene un valor


/*
console.log("nombreCompleto", typeof nombreCompleto);
console.log('telefono: ', typeof telefono);
console.log('humano: ', typeof humano);
console.log('direccion: ', typeof direccion);
console.log('codigoPostal: ', typeof codigoPostal);
*/
nombreCompleto = String(123);
telefono = Number("985246");
console.log("nombreCompleto",  nombreCompleto);
console.log('telefono: ',  telefono);
console.log('humano: ',  humano);
console.log('direccion: ',  direccion);
console.log('codigoPostal: ',  codigoPostal);

