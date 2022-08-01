const numeros = [1, 2, 3, 4];

//FUNCION MAP
document.write("<ul>");
numeros.map((numero) => document.write("<li>" + numero + "</li>"));
document.write("</ul>");

//ARRAY DESTRUCTURING
const [, , usuario3] = ["pepe", "lalo", "lara", "nina"]; //La "coma" saltea elementos

//SPREAD OPERATOR
const frutas = ["manzana", "uva", "melon"];
const citricos = ["naranja", "limon", "toronja"];

const nuevo = [...frutas, ...citricos];

document.write(nuevo);
