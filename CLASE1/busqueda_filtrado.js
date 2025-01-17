let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

//Utilizando filter debes filtrar productos que tengan la categoría 'Ropa' e imprimirlos en pantalla.
let productosRopa = productos.filter((producto)=> producto.categoria === 'Ropa')
console.log(`Los productos que tienen la categoría Ropa son:`, productosRopa)

//Filtra los productos con precio mayor de 30 en un nuevo array llamado preciosMayores.
let productosMayor = productos.filter((producto)=> producto.precio > 30)
console.log(`Los productos que tienen el precio mayor de 30 son:`, productosMayor)