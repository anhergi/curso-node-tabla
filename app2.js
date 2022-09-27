// const fs = require('fs');
const { crearArchivoTabla, crearArchivoTablaP } = require("./helpers/multiplicar");

console.clear();

const num = 4;

// crearArchivoTabla(num);
crearArchivoTablaP(num)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(err => console.log(err));