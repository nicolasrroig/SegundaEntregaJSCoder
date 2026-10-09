
const mat = 4;
let matemática;
let lengua;
let física;
let i = 1;

alert("Hola Alumno, vamos a calcular el promedio de tus tres materias: ");

do {

    if (i == 1) {
        matemática = parseInt(prompt("Ingrese la nota de Matemática: "));
    } else if (i == 2) {
        lengua = parseInt(prompt("Ingrese la nota de Lengua: "));
    } else {
        física = parseInt(prompt("Ingrese la nota de Física: "));
    };

    i++;

} while (mat>i);

alert("El promedio de tus notas es: " + parseInt((matemática + lengua + física) / 3));