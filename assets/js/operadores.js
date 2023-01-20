// console.log(optimizacionConcatenacion);

let numero1 = 10;
let numero2 = 15;

// console.log(`La suma es ${numero1 + numero2}`);
// console.log(`La resta es: ${numero2 - numero1}`);
// console.log(`La multiplicación de ${numero1} x ${numero2} es: ${numero1 * numero2}`);
// console.log(`La división de ${numero1} / ${numero2} es: ${numero1 / numero2}`);

let edad = 17;

/* 
Quiero mostrar un mensaje si la persona es mayor de edad y otro si la persona es menor de edad
*/

if(edad >= 18) {
    console.log("Es mayor de edad");
} else {
    console.log("Es menor de edad");
}

const dia = "viernes";

switch(dia) {
    case "lunes": 
        console.log("Hoy es lunes");
        break;
    case "martes": 
        console.log("Hoy es martes");
        break;
    case "miercoles": 
        console.log("Hoy es miércoles");
        break;
    case "jueves": 
        console.log("Hoy es jueves");
        break;
    case "viernes": 
        console.log("Hoy es viernes");
        break;
    case "sabado": 
        console.log("Hoy es sábado");
        break;
    case "domingo": 
        console.log("Hoy es domingo");
        break;
    default:
        console.log("Día inválido");
        break;
}


// ciclo de for o for loop
for (let i = 0; i < 10; i = i + 3) {
    console.log(i);
}

//while loop o ciclo while

let n = 0;

while (n < 3) {
    n++;
    console.log(`El valor de n es : ${n}`);
}

function fnSaludo (name) {
    return `Hola como estas : ${name}`
}

let nombre = prompt("Ingresa tu nombre: ");

console.log(fnSaludo(nombre));