const  axios  = require('axios')
const {Category } = require('../db.js')

const getAllCategory = async (req, res, next)=> {
    try {
        let response = await axios.get('https://api.escuelajs.co/api/v1/categories')
        response = await response.data.map(el => {
            const obj = {
                name: el.name,
            image: el.image
            }
            return obj
        }) 
        const categories = await Category.findAll()
        if (!categories.length) await Category.bulkCreate(response)
        const categoriesDB = await Category.findAll()
        res.json(categoriesDB)
    } catch (error) {
        next(error)
    }
}



const postCategory = async (req, res, next) => {
    const { name, image } = req.body
    try {
        const obj = { name, image }
        const newCategory= await Category.create(obj)
        res.json(newCategory)
    } catch (error) {
        next(error)
    }
}

const updateCategory = async (req, res, next) => {
    const {id} = req.params
    const  {name, image} = req.body
    try {
        const obj = {name, image}
        const categoryUpdate = await Category.update(obj, {
            where: {
                id: id
            }
        })
        res.json({modificado: true})
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllCategory, 
    postCategory, 
    updateCategory
}