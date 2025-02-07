import { readFile, writeFile } from 'fs/promises';
const STUDENTS_FILE = './database/database.json';

let students = [];
const loading = async(req, res) =>{
    try {
    const data = await readFile(STUDENTS_FILE, 'utf-8');
    students =JSON.parse(data);
} catch (error) {
    console.error("Error loading database:", error);
}
}
loading()
export const getStudentsFunction = async(req, res) => {
    res.send({
        status: 200,
        message: 'Students fetched successfully',
        data: students
    })
}

export const getStudentByIdFunction = async(req, res) => {
    const studentId = req.params.id
    const selectedStudent = students.find((student) => student.id === parseInt(studentId))
    if (!selectedStudent) {
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
}

export const postStudentFunction = async (req, res) => {
    const { name, age, major } = req.body
    loading()
    const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
    const newStudent = { id: parseInt(newId), name, age, major }

    students.push(newStudent)
    await writeFile(STUDENTS_FILE, JSON.stringify(students, null, 2))
    res.send({
        status: 201,
        message: 'Student added successfully',
        data: newStudent
    })
}

export const putStudentFunction = async (req, res) => {
    const studentId = parseInt(req.params.id)
    loading()
    const selectedStudent = students.findIndex((student) => student.id === studentId)
    if (selectedStudent === -1) {
        return res.status(404).send({
            status: 404,
            message: 'Student not found'
        })
    }
    const { name, age, major } = req.body
        const updatedStudent = { id: studentId, name, age, major }
        students[selectedStudent] = updatedStudent
        await writeFile(STUDENTS_FILE, JSON.stringify(students, null, 2))
        res.send({
            status: 200,
            message: 'Student updated successfully',
            data: req.body
        })
    }

export const deleteStudentFunction = async (req, res) => {
    const studentId = parseInt(req.params.id)
    loading()
    const selectedStudent = students.findIndex((student) => student.id === studentId)
    if (selectedStudent === -1) {
        return res.status(404).send({
            status: 404,
            message: 'Student not found'
        })
    }
    students.splice(selectedStudent, 1)
    await writeFile(STUDENTS_FILE, JSON.stringify(students, null, 2))
    res.send({
        status: 200,
        message: 'Student deleted successfully'
    })
}