const { Users, Products } = require("../db.js");


const postFavorites= async (req, res, next) => {
    const { idUser, idProduct } = req.body;
    try {
      const userFav = await Users.findByPk(idUser);
      await userFav.addProducts(idProduct);
      console.log(userFav.__proto__);
  
      const favorite = await Users.findByPk(idUser);
  
      res.json(favorite);
    } catch (error) {
      next(error);
    }
  };

  const getFavorites = async (req, res, next) => {
    const { idUser } = req.params;
    try {
      const user = await Users.findByPk(idUser, { include: [{ model: Products }] });
      res.json(user.products);
    } catch (error) {
      console.log(error);
    }
  };

const deleteFavorites = async(req, res, next) => {
    const {idUser, idProduct} = req.query;
    try {
        const userFav = await Users.findByPk(idUser, {include: Products})
        await userFav.removeProducts(idProduct)
        const deleteFav = await Users.findByPk(idUser, {include: Products})
        return res.json(deleteFav.products)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    postFavorites,
    getFavorites,
    deleteFavorites
}