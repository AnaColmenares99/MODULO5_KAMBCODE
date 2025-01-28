import fs from 'fs';

// Función que lee el archivo y retorna una promesa con los números pares
function obtenerNumerosPares() {
    return new Promise((resolve, reject) => {
        fs.readFile('./numeros.txt', (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            const content = data.toString();
            const numbers = content.split(',');
            let numerosPares = '';

            numbers.forEach((numberString, i) => {
                const numero = parseInt(numberString);
                if (numero % 2 === 0) {
                    numerosPares += numero + (i < numbers.length - 1 ? ',' : '');
                }
            });

            resolve(numerosPares); // Resolvemos la promesa con los números pares
        });
    });
}

export default obtenerNumerosPares;