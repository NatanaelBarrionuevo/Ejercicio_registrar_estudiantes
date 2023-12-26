const ReadlineSync = require("readline-sync");

const CantidadEstudiantes = (cantidad) => {
  let cantidadValida = parseInt(cantidad);
  if (!isNaN(cantidadValida) && cantidadValida >= 1) {
    console.log("Iniciando registro de estudiantes...");
    let arreglo = [];
    for (let i = 0; i < cantidad; i++) {
      let apellido = ReadlineSync.question(
        "Ingrese el apellido del Estudiante: "
      );
      let nombre = ReadlineSync.question("Ingrese el nombre del Estudiante: ");

      const apellidoValido = /^[a-zA-Z\s]*$/.test(apellido);
      const nombreValido = /^[a-zA-Z\s]+$/.test(nombre);

      if (apellidoValido && nombreValido) {
        arreglo.push({ apellido: apellido, nombre: nombre });
        console.log(
          `Se ha registrado exitosamente el estudiante ${apellido}, ${nombre}`
        );
      } else {
        alert(
          "Tanto el nombre como el apellido ingresado deben contener solamente letras y espacios"
        );
        i--; // Permite que el usuario reingrese los datos si hay error
      }
    }
    return arreglo; // Retorna el arreglo con los estudiantes registrados
  } else if (cantidad === 0) {
    return []; // Retorna un arreglo vacío si la cantidad es 0
  } else {
    alert("No puede ingresar una cantidad de estudiantes menor a 1");
    return null; // Retorna null si la cantidad no está en el rango válido
  }
};

const MostrarEstudaintes = (estudiantes) => {
  console.log("Listando estudiantes...");
  let nro = 1;
  estudiantes.forEach((element) => {
    console.log(
      `Estudiante nro: ${nro}- Apellido: ${element.apellido}, Nombre: ${element.nombre}`
    );
    nro++;
  });
};

module.exports = { CantidadEstudiantes, MostrarEstudaintes };
