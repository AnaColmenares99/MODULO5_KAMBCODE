import fs from 'fs'
import obtenerNumerosPares from './find.js'

let content = '';
for (let i = 1; i <= 1000; i++) { 
    content += i + (i < 1000 ? ',' : ''); 
}

// Escribir en el archivo numeros.txt
fs.writeFile('numeros.txt', content, (error) => {
  if (error) {
    console.error('Error al escribir el archivo:', error);
  } else {
    console.log('Archivo numeros.txt creado exitosamente');
  }
});

// Traemos la función del archivo de find.js y así generamos el archivo .txt con los número pares.
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