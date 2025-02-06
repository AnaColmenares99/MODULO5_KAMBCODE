# API con Express

Este proyecto es una API con Express. La API maneja un conjunto de estudiantes y permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando peticiones HTTP.
En esta API, el id de los estudiantes son unicos y se generan de manera automatica. Los estudiantes se encuentran en una base
de datos y las funciones en una carpeta por separado. 
Se realiza validación de la información en el nombre, edad y especialidad.
La La API estará corriendo en el puerto 3000.

## Endpoints disponibles

### Obtener todos los estudiantes
**Ruta:** GET /students 
**Respuesta:** Lista de todos los estudiantes en formato JSON.
![GET - All students](image.png)


### Obtener un estudiante por ID
**Ruta:** GET /students/:id  
**Parámetros:** id (string) - ID del estudiante a obtener.  
**Respuesta:** Detalles del estudiante en formato JSON.
![GET - Selected student](image-1.png)


### Crear un nuevo estudiante
**Ruta:** POST /students  
**Cuerpo de la petición:** JSON con los siguientes campos:
```bash
{
  "name": "Nuevo estudiante",
  "age": "Edad",
  "major": "Especialidad"
}
```
**Respuesta:** Student fetched successfully.
![POST - Added student](image-2.png)


### Actualizar un estudiante
**Ruta:** PUT /students/:id  
**Parámetros:** id (string) - ID del estudiante a actualizar. 
**Cuerpo de la petición:** JSON con los siguientes campos:
```bash
{
  "name": "Nuevo estudiante",
  "age": "Edad",
  "major": "Especialidad"
}
``` 
**Respuesta:** Student updated successfully.
![PUT - Updated student](image-3.png)

### Eliminar un estudiante
**Ruta:** DELETE /students/:id  
**Respuesta:** Student deleted successfully
![DELETE - Deleted student](image-4.png)


## Validación

**Ruta:** POST /students o PUT /students/:id  
**Cuerpo de la petición:** JSON con los siguientes campos:
```bash
{
  "name": // Vacio o diferente a string
  "age": "Edad",
  "major": "Especialidad"
}
```
**Respuesta:** Name cannot be empty or null.
![POST - Name error](image-5.png)

**Ruta:** POST /students o  PUT /students/:id  
**Cuerpo de la petición:** JSON con los siguientes campos:
```bash
{
  "name": "Nuevo estudiante",
  "age": // Diferente a number
  "major": "Especialidad"
}
```
**Respuesta:** Age must be a non-negative number.
![POST - Age error](image-6.png)

**Ruta:** POST /students o PUT /students/:id  
**Cuerpo de la petición:** JSON con los siguientes campos:
```bash
{
  "name": "Nuevo estudiante",
  "age": "Edad",
  "major": // Vacio o diferente a string
}
```
**Respuesta:** Major cannot be empty or null.
![POST - Major error](image-7.png)