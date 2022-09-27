const { Products, Category} = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');

const getAllProducts = async (req, res, next) => {
    try {
        let products = await axios.get('https://api.escuelajs.co/api/v1/products')
        products = await products.data.map(el => {
            const obj = {
                name: el.title,
                price: el.price,
                description: el.description,
                category: el.category.id
            }
            return obj
        })
        const allProducts = await Products.findAll()
        if (!allProducts.length) await Products.bulkCreate(products)
        //const categories 
        const productsDB = await Products.findAll({include: [{model: Category}]})
        res.json(productsDB)

    } catch (error) {
        next(error)
    }
}

const getProductById = async (req, res, next) => {
    const { id } = req.params
    try {
        const product = await Products.findByPk(id)
        res.json(product)
    } catch (error) {
        next(error)
    }
}

const postProducts = async (req, res, next) => {
    const { name, price, description } = req.body
    try {
        const obj = { name, price, description }
        const newProduct = await Products.create(obj)
        res.json(newProduct)
    } catch (error) {
        next(error)
    }
}

const getProductByName = async (req, res, next) => {
    const { name } = req.query
    try {
        const product = await Products.findAll({
            where: {
                name: {
                    [Op.iLike]: '%' + name + '%'
                }
            }
        })
        res.json(product)
    } catch (error) {
        next(error)
    }
}

const putProducts = async (req, res, next) => {
    const { id } = req.params
    const { name, price, description } = req.body
    try {
        const obj = { id, name, price, description }
        const productUpdate = await Products.update(obj, {
            where: {
                id: id
            }
        })
        res.json({ modificado: true })
    } catch (error) {
        next(error)
    }
}

const deleteProduct = async (req, res, next) => {
    const { id } = req.params
    try {
        const productDeleted = await Products.destroy({
            where: {
                id: id
            }
        })
        res.json({ eliminado: true })
    } catch (error) {
        next(error)
    }
}




module.exports = {
    getAllProducts,
    getProductById,
    postProducts,
    getProductByName,
    putProducts,
    deleteProduct
}

