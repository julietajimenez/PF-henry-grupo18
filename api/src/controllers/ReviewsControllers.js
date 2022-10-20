const { Products, Reviews, Users } = require("../db");
const axios = require("axios");
const { Op, where } = require("sequelize");
const { getProductById, updateRating } = require("./ProductsControllers");

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

const getReviews = async (req, res, next) => {
    try {
        const reviews = await Reviews.findAll()
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
        await updateRating(idProduct)
    } catch (error) {
        next(error)
    }
}

const editReview = async (req, res, next) => {
    const { idProduct, comment, rating, userEmail, idReview } = req.body
    console.log(req.body)
    try {
        const review = { comment, rating, productId:idProduct, userEmail }
        const reviewUpdate = await Reviews.update(review, {
            where: {
                id: idReview
            },
          });
          res.json({ modificado: true });
    } catch (error) {
        next(error)
    }
}

const putProducts = async (req, res, next) => {
    const { id } = req.params;
    const { name, brand, price, description, category, image, stock, active } =
      req.body;
    try {
      const obj = {
        id,
        name,
        brand,
        price,
        description,
        category,
        image,
        stock,
        active,
      };
      const productUpdate = await Products.update(obj, {
        where: {
          id: id,
        },
      });
      res.json({ modificado: true });
    } catch (error) {
      next(error);
    }
  };

module.exports = {
    getAllReviewsFromProduct,
    addReview,
    editReview,
    getReviews
}