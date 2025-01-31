const products = [
    { id: '1', name: 'Laptop', price: 999.99, category: 'Electronics' },
    { id: '2', name: 'Chair', price: 49.99, category: 'Furniture' },
    { id: '3', name: 'Pen', price: 1.99, category: 'Stationery' }
];  

const handleRequest = async (req, res) => {
    const {url, method} = req
    
    let body = ''
    req.on('data', (chunk) => {
        body += chunk.toString()
    })

    req.on('end', () => {   
        console.log(url.split('/'))
        const path = url.split('/')[1]
        const id = url.split('/')[2]
        try {
            if(path === 'products'){
                if(method === 'GET' && !id){
                    res.writeHead(200,  {'Content-Type': 'text/plain'})
                    res.end(JSON.stringify(products))
                }
                if(method === 'GET' && id){
                    res.writeHead(200,  {'Content-Type': 'text/plain'})
                    const selectedProduct = products.find((product) => {
                        return product.id === id
                    })
                    res.end(JSON.stringify(selectedProduct))
                }
                if(method === 'POST' && body){
                    console.log("Datos recibidos:", body)
                    let data = JSON.parse(body)
                    res.writeHead(201, {'Content-Type': 'text/plain'})

                    products.push(data)
                    res.end('Producto agregado')
                }
                if(method === 'PUT' && id){
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    let data = JSON.parse(body)
                    let index = products.findIndex((product) => {
                        return product.id === id
                    })
                    if (index === -1) {
                        res.writeHead(404, {'Content-Type': 'text/plain'})
                        res.end('Producto no encontrado')
                        return
                    }
                    products[index] = { ...products[index], ...data };  //Operador de propagación
                    res.end('Producto actualizado')
                }
                if(method === 'DELETE' && id){
                    let index = products.findIndex((product) => product.id === id)
                    products.splice(index, 1);
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.end('Producto eliminado')
                }
            } else {
                res.writeHead(404)
                res.end('No encontramos esa ruta') 
            }
           
        } catch (error) {
            console.log(error)
            res.writeHead(500)
            res.end('No encontramos esa ruta') 
        }
        

    })
}

export default handleRequest;