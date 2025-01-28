import fs from 'fs'
// import obtenerNumerosPares from './find.js'

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
// obtenerNumerosPares()