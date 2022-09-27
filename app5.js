const { crearArchivoTablaP2 } = require("./helpers/multiplicar");
const yargs = require("./config/yargs");

console.clear();

crearArchivoTablaP2(yargs.b, yargs?.l)
     .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
     .catch(err => console.log(err));