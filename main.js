
const mat = 3;
let matemática;
let lengua;
let física;
let i = 1;

console.log("Hola Alumno, vamos a calcular el promedio de tus tres materias: ");

do {

    if (i == 1) {
        matemática = parseInt(prompt("Ingrese la nota de Matemática: "));
    } else if (i == 2) {
        lengua = parseInt(prompt("Ingrese la nota de Lengua: "));
    } else {
        física = parseInt(prompt("Ingrese la nota de Física: "));
    };

    i++;

} while (mat!=i);

console.log("El promedio de tus notas es: " + ((matemática + lengua + física) / 3));