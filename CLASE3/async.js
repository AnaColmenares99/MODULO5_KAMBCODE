
const esperarSegundos = async(segundos) => {
    // Incluye la logica de la función acá
    await new Promise ((resolve) => {
        setTimeout(() => {
            console.log(`Ya han pasado ${segundos} segundos`); resolve();},
            segundos*1000);
        });
    }   
export default esperarSegundos;