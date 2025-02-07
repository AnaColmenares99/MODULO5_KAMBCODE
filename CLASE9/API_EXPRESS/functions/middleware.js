import { readFile, writeFile } from 'fs/promises';
const USERS_FILE = './database/users.json'

export const createRegister = async (req, res) => {
    const {username, password} = req.body
    let users;
    try{
        users = await readFile(USERS_FILE)
        users = JSON.parse(users)
    }catch (e){
        users = []
        await writeFile(USERS_FILE, JSON.stringify([]))    
    }
    const userExists = users.some((user) => {
        return user.username === username
    })
    if(userExists){
        return res.status(401).send({message: 'Username already exists'})
    }
    users.push({username, password, tokens: []})
    await writeFile(USERS_FILE, JSON.stringify(users, null, 2))
    
    res.send({
        message: 'User register successfully',
        user: username
    }) 
}

export const login = async (req, res ) => {
    const {username, password} = req.body
    let users = await readFile(USERS_FILE)
    users = JSON.parse(users)
    const user = users.findIndex((user) => {
        return user.username === username && user.password === password
    })
    if(user === -1){ 
        return res.status(401).send({message: 'Invalid credentials'})
    }
    const token = Math.random().toString(36) + Date.now()
    users[user].tokens.push(token)
    await writeFile(USERS_FILE, JSON.stringify(users, null, 2))
    return res.send({
        message: 'Login successful',
        token: token
    })
}


export const isAuth = async(req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({ message: 'Unauthorized' })
    let users = await readFile(USERS_FILE)
    users = JSON.parse(users)
    const isValidUser = users.find(user => user.tokens.includes(token))
    if(!isValidUser) return res.status(401).json({ message: 'Unauthorized' })
    
    next()
    // Bearer token 
}


export const validateStudentData = (req, res, next) => { 
    const { name, age, major } = req.body
    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            status: 400,
            message: 'Name cannot be empty or null'
        });
    }
    if (typeof age !== 'number' || age < 0) {
        return res.status(400).json({
            status: 400,
            message: 'Age must be a non-negative number'
        });
    }
    if (!major || typeof major !== 'string' || major.trim() === '') {
        return res.status(400).json({
            status: 400,
            message: 'Major cannot be empty or null'
        });
    }
    next()
}