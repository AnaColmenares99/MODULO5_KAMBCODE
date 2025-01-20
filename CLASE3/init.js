import esperarSegundos from './async.js'; // Aca debes poner la ruta donde creaste el archivo async.js

//Despues de esto ya podras usar la función esperarSegundos en este archivo

const tarea = async () => {
    try {
        console.log('Inicio');
        await esperarSegundos(3);
        console.log('Fin');
    } catch (error) {
        console.error('Error:', error);
    }
}
tarea();
