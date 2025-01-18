 //Nos permite importar y exportar archivos de otra parte en el package.json "type": "module"
 import Chance from 'chance';
    
 const chance = new Chance();
 
 // Generar datos aleatorios
 const nombre = chance.name();
 const genero = chance.gender();
 const edad = chance.age();
 const correo = chance.email();
 const fechaNacimiento = chance.birthday();
 const telefono = chance.phone();
 const animal = chance.animal();
 
 // Imprimir los datos aleatorios generados
 console.log("Datos aleatorios generados:");
 console.log("Nombre:", nombre);
 console.log("Genero:", genero);
 console.log("Edad:", edad);
 console.log("Correo electrónico:", correo);
 console.log("Fecha de nacimiento:", fechaNacimiento.toLocaleDateString());
 console.log("Teléfono:", telefono);
 console.log("Animal favorito:", animal);