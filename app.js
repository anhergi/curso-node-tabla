const fs = require('fs');

console.clear();
console.log("===============");
console.log(" Tabla del 5");
console.log("===============");

const num = 3;
let salida = "";

for(let i = 1; i <= 10; i++) {
    // console.log(`${num} x ${i} = ${num*i}`);
    salida += `${num} x ${i} = ${num*i}\n`;
}

// fs.writeFile(`tabla-${num}.txt`, salida, (err) => {
//     if (err) throw err;

//     console.log("txt creada");
// })

fs.writeFileSync(`tabla-${num}.txt`, salida);
console.log("txt creada");

// console.log(salida);
