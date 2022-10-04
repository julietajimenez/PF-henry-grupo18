const  axios  = require('axios')
const {Category, Products } = require('../db.js')

const getAllCategory = async (req, res, next)=> {
    try {
        if (req.query.filter) {
            const categoryFilter = await Products.findAll({
              where: { 
                category: req.query.filter 
              },
            });
            return res.json(categoryFilter);
          }
        const products = await Products.findAll()
        const categorys= products.map(e=> e.category)
        const categoryDB = await Category.findAll()
        const categoryName = categoryDB.map(e=>e.name)
        const set = [...new Set(categorys)]
        const allCategorys = [...categoryName, ...set]
        res.json(allCategorys)
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