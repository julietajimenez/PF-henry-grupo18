const { Products, Reviews, Users } = require("../db");
const axios = require("axios");
const { Op, where } = require("sequelize");
const { getProductById } = require("./ProductsControllers");

const getAllReviewsFromProduct = async (req, res, next) => {
    try {
        const { idProduct } = req.params

        let product = await Products.findByPk(idProduct);
        let reviews = null
        if(product) {
            reviews = await Reviews.findAll({
                where: {
                    productId: product.id,
                },
            })
        }

        res.json(reviews);
    } catch (error) {
        next(error);
    }
};

const addReview = async (req, res, next) => {
    const { idProduct, comment, rating, userEmail } = req.body

    try {
        const review = { comment, rating, productId:idProduct, userEmail }
        const newReview = await Reviews.create(review)
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getAllReviewsFromProduct,
    addReview
}