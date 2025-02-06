import { readFile, writeFile } from 'fs/promises';

let students = [];
try {
    const data = await readFile('./database/database.json', 'utf-8');
    students = JSON.parse(data);
} catch (error) {
    console.error("Error loading database:", error);
}

const validateStudentData = (name, age, major) => {
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return 'Name cannot be empty or null';
    }
    if (typeof age !== 'number' || age < 0) {
        return 'Age must be a non-negative number';
    }
    if (!major || typeof major !== 'string' || major.trim() === '') {
        return 'Major cannot be empty or null';
    }
    return null;
};

export const getStudentsFunction = (req, res) => {
    res.send({
        status: 200,
        message: 'Students fetched successfully',
        data: students
    })
}

export const getStudentByIdFunction = (req, res) => {
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
    const validationError = validateStudentData(name, age, major);
    if(validationError){
        return res.status(400).json({
            status: 400,
            message: validationError
        });
    }
    const newId = students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 1;
    const newStudent = { id: newId, name, age, major }

    students.push(newStudent)
    await writeFile('./database/database.json', JSON.stringify(students, null, 2))
    res.send({
        status: 201,
        message: 'Student added successfully',
        data: newStudent
    })
}

export const putStudentFunction = async (req, res) => {
    const studentId = parseInt(req.params.id)
    const selectedStudent = students.findIndex((student) => student.id === studentId)
    if (selectedStudent === -1) {
        return res.status(404).send({
            status: 404,
            message: 'Student not found'
        })
    }
    const { name, age, major } = req.body
    const validationError = validateStudentData(name, age, major);
    if (validationError) {
        return res.status(400).json({
            status: 400,
            message: validationError
        });
    } else {
        const updatedStudent = { id, name, age, major }
        students[selectedStudent] = updatedStudent
        await writeFile('./database/database.json', JSON.stringify(students, null, 2))
        res.send({
            status: 200,
            message: 'Student updated successfully',
            data: req.body
        })
    }
}

export const deleteStudentFunction = async (req, res) => {
    const studentId = parseInt(req.params.id)
    const selectedStudent = students.findIndex((student) => student.id === studentId)
    if (selectedStudent === -1) {
        return res.status(404).send({
            status: 404,
            message: 'Student not found'
        })
    }
    students.splice(selectedStudent, 1)
    await writeFile('./database/database.json', JSON.stringify(students, null, 2))
    res.send({
        status: 200,
        message: 'Student deleted successfully'
    })
}