const fs = require('fs');

const crearArchivoTabla = (base = 5) => {

console.log("===============");
console.log(" Tabla del ", base);
console.log("===============");

let salida = "";

for(let i = 1; i <= 10; i++) {
    salida += `${base} x ${i} = ${base*i}\n`;
    }

fs.writeFileSync(`tabla-${base}.txt`, salida);
console.log("txt creada");
}

const crearArchivoTablaP = async(base = 5) => {
    console.log("===============");
    console.log(" Tabla del ", base);
    console.log("===============");
    
    let salida = "";
    let nombreArchivo = "";
    
    for(let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
    }
    
    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        nombreArchivo = `tabla-${base}`;
        return nombreArchivo;
    } catch(error) {
        throw error;
    }
    
}


const crearArchivoTablaP2 = async(base = 5, listar = false) => {
        
    let salida = "";
    let nombreArchivo = "";
    
    for(let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    if (listar) {
        console.log("===============");
        console.log(" Tabla del ", base);
        console.log("===============");
        console.log(salida);
    }
    
    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        nombreArchivo = `tabla-${base}`;
        return nombreArchivo;
    } catch(error) {
        throw error;
    }
    
}

const crearArchivoTablaP3 = async(base = 5, listar = false, hasta = 10) => {
        
    let salida = "";
    let nombreArchivo = "";
    
    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base*i}\n`;
    }

    if (listar) {
        console.log("===============");
        console.log(" Tabla del ", base);
        console.log("===============");
        console.log(salida);
    }
    
    try {
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        nombreArchivo = `tabla-${base}`;
        return nombreArchivo;
    } catch(error) {
        throw error;
    }
    
}



module.exports = {
    crearArchivoTabla: crearArchivoTabla,
    crearArchivoTablaP: crearArchivoTablaP,
    crearArchivoTablaP2: crearArchivoTablaP2,
    crearArchivoTablaP3: crearArchivoTablaP3
}