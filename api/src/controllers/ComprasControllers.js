const { Compras, Users, Products, detalle_Compras } = require("../db.js");
// const { getProductByIdCompras } = require("./ProductsControllers.js");

const getAllCompras = async (req, res, next) => {
  try {
    const { userEmail } = req.params;
    const allCompras = await Compras.findAll({
      where: { userEmail: userEmail },
      include: Products,
    });
    return res.json(allCompras);
  } catch (error) {
    next(error);
  }
};
const getCompras = async (req, res, next) => {
  try {
    const allCompras = await detalle_Compras.findAll();
    return res.json(allCompras);
  } catch (error) {
    next(error);
  }
};

const getComprasById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const compra = await Compras.findByPk(id, {
      include: Products,
    });
    return res.json(compra);
  } catch (error) {
    next(error);
  }
};

const postCompras = async (req, res, next) => {
  const { userEmail, total, listProd } = req.body;
  try {
    const obj = { total, userEmail };
    const newCompra = await Compras.create(obj);
    for (let i = 0; i < listProd.length; i++) {
      console.log(listProd[i]);
      const prod = await Products.findByPk(listProd[i].id);
      const cantidad = listProd[i].cantidad;
      const precio = listProd[i].price;
      await newCompra.addProduct(prod, {
        through: { cantidad: cantidad, price: precio },
      });
    }
    res.json("exito");
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCompras,
  postCompras,
  getComprasById,
  getCompras,
};
