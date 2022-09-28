const {Users} = require('../db.js')

const getAllUsers = async (req, res, next )=> {
    try {
        const allUsers = await Users.findAll()
        res.json(allUsers)
    } catch (error) {
        next(error)
    }
}

const postUsers = async (req, res, next )=> {
    const {name, email, avatar, password} = req.body
    try {
        const getAll = await Users.findAll()
        const getEmail = getAll.map(e=>e.email)
        if(!getEmail.find(e => e === email)){
            const obj = {name, email, avatar, password}
            const newUser = await Users.create(obj)   
            res.json(newUser)     
        } else {
            return res.json({ message: "Usuario ya existente" });
        }
    } catch (error) {
        next(error)
    }
} 


const updateUser = async (req, res, next) => {
    const {id} = req.params
    const  {name, email, avatar, password, active} = req.body
    try {
        const obj = {name, email, avatar, password, active}
        const userUpdate = await Users.update(obj, {
            where: {
                id: id
            }
        })
        res.json({modificado: true})
    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    const {id} = req.params
    try {
        const user = await Users.findByPk(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getAllUsers,
    postUsers,
    updateUser,
    getUserById
}