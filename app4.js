const { crearArchivoTablaP, crearArchivoTablaP2} = require("./helpers/multiplicar");
// const yargs = require("yargs");
console.clear();


const yargs = require("yargs")
                // .option("b",{
                //     alias: "base",
                //     type: "number",
                //     demandOption: true
                // })
                .options({
                    "b" : {
                            alias: "base",
                            type: "number",
                            demandOption: true
                        },
                    "l" : {
                            alias: "listar",
                            type: "boolean",
                            demandOption: false
                    }
                })
                .check((argv, options) => {
                    if (isNaN(argv.base)) {
                        throw `La base tiene que ser un número`
                    }
                    if (argv?.l && !(typeof(argv.l) === "boolean")) {
                        throw `listar debe ser booleano`
                    }
                    return true;
                })
                .argv;



// console.log(process.argv);
// const [,,arg3 = "base=5"] = process.argv; // No es lo más indicado recoger los argumentos asi
// console.log(arg3);

// const [,base = 5] = arg3.split("=");
// console.log(base);

// crearArchivoTablaP(base)
//     .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
//     .catch(err => console.log(err));

// console.log(process.argv);
// console.log(yargs.argv);

// console.log("base: yargs ", yargs.argv.base);

// console.log(yargs);
// console.log("base: yargs ", yargs.b);

// crearArchivoTablaP(yargs.b)
//      .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
//      .catch(err => console.log(err));

crearArchivoTablaP2(yargs.b, yargs?.l)
     .then(nombreArchivo => console.log(`${nombreArchivo} creado`))
     .catch(err => console.log(err));