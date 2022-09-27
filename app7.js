const { crearArchivoTablaP3 } = require("./helpers/multiplicar");
const yargs = require("./config/yargs");

console.clear();

crearArchivoTablaP3(yargs.b, yargs?.l, yargs?.h)
     .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
     .catch(err => console.log(err));