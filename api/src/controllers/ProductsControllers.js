const { Products, Category } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");
require("dotenv").config();
const { URL_API } = process.env;

const getAllProducts = async (req, res, next) => {
  try {
    let productsNyx = await axios.get(URL_API + "brand=physicians formula");
    let productsMaybelline = await axios.get(URL_API + "brand=maybelline");
    let productElf = await axios.get(URL_API + "brand=e.l.f.");
    let productsPacifica = await axios.get(URL_API + "brand=pacifica");
    let productsAlmay = await axios.get(URL_API + "brand=almay");
    let productsColourpop = await axios.get(URL_API + "brand=colourpop");
    let productsRevlon = await axios.get(URL_API + "brand=revlon");

    let productsLoreal = await axios.get(URL_API + "brand=l'oreal");

    let products = [
      ...productsLoreal.data,
      ...productsMaybelline.data,
      ...productsNyx.data,
      ...productElf.data,
      ...productsPacifica.data,
      ...productsAlmay.data,
      ...productsColourpop.data,
      ...productsRevlon.data,
    ];

    products = products.map((el) => {
      const obj = {
        name: el.name,
        brand: el.brand,
        price: el.price,
        rating: el.rating,
        stock: Math.ceil(el.price * 10),
        category: el.product_type,
        description: el.description,
        image: el.image_link,
      };
      return obj;
    });

    if (req.query.filter) {
      const productFilter = await Products.findAll({
        where: {
          brand: req.query.filter,
        },
      });
      return res.json(productFilter);
    }
    let allProducts = await Products.findAll();
    if (!allProducts.length) await Products.bulkCreate(products);
    // //const categories
    const productsDB = await Products.findAll();
    res.json(productsDB);
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await Products.findByPk(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const postProducts = async (req, res, next) => {
  const { name, brand, price, description, category, image, stock } = req.body;
  try {
    const obj = { name, brand, price, description, category, image, stock };
    const newProduct = await Products.create(obj);
    /*     const categoriesProduct = await Category.findAll({
      where: {
        name: categories,
      },
    });
    await newProduct.addCategories(categoriesProduct); */
    console.log(newProduct.__proto__);
    res.json(newProduct);
  } catch (error) {
    next(error);
  }
};

const getProductByName = async (req, res, next) => {
  const { name } = req.query;
  try {
    const product = await Products.findAll({
      where: {
        name: {
          [Op.iLike]: "%" + name + "%",
        },
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

const getProductByBrand = async (req, res, next) => {
  const { brand } = req.query;
  try {
    const product = await Products.findAll({
      where: {
        brand: {
          [Op.iLike]: "%" + brand + "%",
        },
      },
    });
    res.json(product);
  } catch (error) {
    next(error);
  }
};

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

const deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const productDeleted = await Products.destroy({
      where: {
        id: id,
      },
    });
    res.json({ eliminado: true });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  postProducts,
  getProductByName,
  getProductByBrand,
  putProducts,
  deleteProduct,
};
