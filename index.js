const { CantidadEstudiantes, MostrarEstudaintes } = require("./dependencias");
const ReadlineSync = require("readline-sync");

let cantidadEstudiantes = parseInt(
  ReadlineSync.question(
    "Ingrese la cantidad de estudiantes que desea registrar. \nIngrese 0 para salir."
  )
);

// Verifica si el input del usuario es un número válido
if (!isNaN(cantidadEstudiantes)) {
  let estudiantesRegistrados = CantidadEstudiantes(cantidadEstudiantes);
  MostrarEstudaintes(estudiantesRegistrados);
} else {
  alert("Por favor, ingrese un número válido.");
}
