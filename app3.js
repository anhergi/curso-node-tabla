const { crearArchivoTablaP } = require("./helpers/multiplicar");


console.clear();

// console.log(process.argv);
const [,,arg3 = "base=5"] = process.argv; // No es lo más indicado recoger los argumentos asi

console.log(arg3);

const [,base = 5] = arg3.split("=");
console.log(base);

crearArchivoTablaP(base)
    .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
    .catch(err => console.log(err));