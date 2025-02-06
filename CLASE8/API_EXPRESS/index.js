import express from 'express';
import { deleteStudentFunction, getStudentByIdFunction, getStudentsFunction, postStudentFunction, putStudentFunction } from './funtions/index.js';

const app = express()
app.use(express.json())

app.get('/students', getStudentsFunction)

app.get('/students/:id', getStudentByIdFunction)

app.post('/students', postStudentFunction)

app.put('/students/:id', putStudentFunction)

app.delete('/students/:id', deleteStudentFunction)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})