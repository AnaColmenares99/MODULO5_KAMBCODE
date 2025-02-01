# API Básica con Express

Este proyecto es una API básica con Express. La API maneja un conjunto de estudiantes y permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) utilizando peticiones HTTP.
La La API estará corriendo en el puerto 3000.

## Endpoints disponibles

### Obtener todos los estudiantes
**Ruta:** GET /students  
**Respuesta:** Lista de todos los estudiantes en formato JSON.
![GET - Todos los estudiantes](image.png)

### Obtener un estudiante por ID
**Ruta:** GET /students/:id  
**Parámetros:** id (string) - ID del estudiante a obtener.  
**Respuesta:** Detalles del estudiante en formato JSON.
![GET - Estudiante Seleccionado](image-1.png)

### Crear un nuevo estudiante
**Ruta:** POST /students  
**Cuerpo de la petición:** JSON con los siguientes campos:
```bash
{
  "id": "Id",
  "name": "Nuevo estudiante",
  "age": "Edad",
  "major": "Especialidad"
}
```
**Respuesta:** Student fetched successfully.
![POST - Agregar un estudiante](image-2.png)

### Actualizar un estudiante
**Ruta:** PUT /students/:id  
**Parámetros:** id (string) - ID del estudiante a actualizar.  
**Respuesta:** Student updated successfully.
![PUT - Actualizar un estudiante](image-3.png)

### Eliminar un estudiante
**Ruta:** DELETE /students/:id  
**Respuesta:** Student deleted successfully
![DELETE - Estudiante eliminado](image-4.png)
![GET - Todos los estudiates sin el eliminado](image-5.png)