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
                const numero = parseInt(numberString); // Convertir a número
                if (numero % 2 === 0) {
                    numerosPares += numero + (i < numbers.length - 1 ? ',' : '');
                }
            });

            resolve(numerosPares); // Resolvemos la promesa con los números pares
        });
    });
}

// Llamamos a la función y luego escribimos el archivo
obtenerNumerosPares()
    .then((numerosPares) => {
        // Escribir en el archivo numerosPares.txt
        fs.writeFile('numerosPares.txt', numerosPares, (error) => {
            if (error) {
                console.error('Error al escribir el archivo:', error);
            } else {
                console.log('Archivo numerosPares.txt creado exitosamente');
            }
        });
    })
    .catch((error) => {
        console.log('Error al leer el archivo:', error);
    });
