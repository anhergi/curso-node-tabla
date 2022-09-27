const yargs = require("yargs")
                .options({
                    "b" : {
                            alias: "base",
                            type: "number",
                            demandOption: true,
                            describe: "La base de la tabla de multiplicar"
                        },
                    "l" : {
                            alias: "listar",
                            type: "boolean",
                            demandOption: false,
                            describe: "Muestra la tabla en consola"
                            
                        },
                    "h": {
                            alias: "hasta",
                            type: "number",
                            demandOption: false,
                            describe: "Limite de la tabla"
                    }
                })
                .check((argv, options) => {
                    if (isNaN(argv.base)) {
                        throw `La base tiene que ser un número`
                    }
                    if (argv?.l && !(typeof(argv.l) === "boolean")) {
                        throw `listar debe ser booleano`
                    }
                    if(isNaN(argv.hasta)) {
                        throw "El límite tiene que ser un número"
                    }
                    return true;
                })
                .argv;

module.exports = yargs;