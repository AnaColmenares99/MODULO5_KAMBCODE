import express from 'express';

const app = express()

// habilita la propiedad res.body en todos los endpoints
app.use(express.json())

const students = [
    { id: 1, name: 'Alice', age: 20, major: 'Computer Science' },
    { id: 2, name: 'Bob', age: 22, major: 'Mathematics' },
    { id: 3, name: 'Charlie', age: 21, major: 'Physics' }
];

app.get('/students', (req, res) => {
    res.send({
        status: 200,
        message: 'Students fetched successfully',
        data: students
    })})


    app.get('/students/:id', (req, res) => {
        const studentId = req.params.id
        const selectedStudent = students.find( (student) => student.id === parseInt(studentId) )
        if(!selectedStudent){
            return res.status(404).send({
                status: 404,
                message: 'Student not found'
            })
        }
        res.send({
            status: 200,
            message: 'Student fetched successfully',
            data: selectedStudent
        })
    })

    app.post('/students', (req, res) => {
        const newStudent = req.body
        students.push(newStudent)
        res.send({
            status: 201,
            message: 'Student added successfully',
            data: req.body
        })
    })

    app.put('/students/:id', (req, res) => {
        const studentId = req.params.id
        const selectedStudent = students.findIndex((student) => student.id === parseInt(studentId))
        if(selectedStudent === -1){
            return res.status(404).send({
                status: 404,
                message: 'Student not found'
            })
        }
        const updatedStudent = req.body
        students[selectedStudent] = updatedStudent
        res.send({
            status: 200,
            message: 'Student updated successfully',
            data: req.body
        })
    })

    app.delete('/students/:id', (req, res) => {
        const studentId = req.params.id
        const selectedStudent = students.findIndex((student) => student.id === parseInt(studentId))
        if(selectedStudent === -1){
            return res.status(404).send({
                status: 404,
                message: 'Student not found'
            })
        }
        students.splice(selectedStudent, 1)
        res.send({
            status: 200,
            message: 'Student deleted successfully'
        })
    })
    
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    })