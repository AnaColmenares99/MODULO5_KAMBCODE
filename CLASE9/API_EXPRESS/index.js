import express from 'express';
import { deleteStudentFunction, getStudentByIdFunction, getStudentsFunction, postStudentFunction, putStudentFunction } from './functions/index.js';
import { createRegister, isAuth, login, validateStudentData } from './functions/middleware.js';

const app = express()
app.use(express.json())

app.get('/students', getStudentsFunction)
app.get('/students/:id', getStudentByIdFunction)
app.post('/students', validateStudentData, isAuth, postStudentFunction)
app.put('/students/:id', validateStudentData, isAuth, putStudentFunction)
app.delete('/students/:id', isAuth, deleteStudentFunction)

app.post('/register', createRegister)
app.post('/login', login)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})