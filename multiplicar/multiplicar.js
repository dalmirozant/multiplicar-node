const fs = require('fs');
const colors = require('colors');

let listarTabla = (base,limite) => {

    console.log('=================================='.green);
    console.log(`  ** TABLA DEL ${base} hasta el ${limite}**`.yellow);
    console.log('=================================='.green);
    

        if(!Number(base)||!Number(limite)){
            console.log('el límite y la base tienen que ser números'.red);
            
            return;
        }

        let data = '';
 
        for(i=1;i<=limite;i++){
            if(i%2){
            console.log(`${i} * ${base} = ${i*base}`.cyan);
            } else {
            console.log(`${i} * ${base} = ${i*base}`.blue);
            }
            
        }
}

let crearArchivo = (base,limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)||!Number(limite)){
            reject('el límite y la base tienen que ser números');
            return;
        }

let data = '';

for(i = 1; i <= limite; i++){
    //console.log(`${i} * ${base} = ${i*base}`);
    data += `${i} * ${base} = ${i*base}\n`;
}


fs.writeFile(`archivos/tabla-${base}-del-1-al-${limite}.txt`, data, (err) => {
    if (err) reject(err);
    else
        resolve(`tabla-${base}-del-1-al-${limite}.txt`);
  });

    })
}

module.exports = {
    crearArchivo,
    listarTabla
}