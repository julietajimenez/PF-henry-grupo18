const { Compras, Users, Products } = require("../db.js");
// const { getProductByIdCompras } = require("./ProductsControllers.js");


const getAllCompras = async (req, res, next) => {
    try {
        const { userEmail } = req.params
        const allCompras = await Compras.findAll({
            where: { userEmail: userEmail },
            include: Products
        })
        return res.json(allCompras); 
    } catch (error) {
        next(error)
    }
}

// const getCompras = async (listProd) => {
//     listProd = listProd.split(",");
//     let products = [];
//     try {
//       for (const idProduct of listProd) {
//         products.push(await getProductByIdCompras(idProduct));
//       }
  
//       res.json(products);
//     } catch (error) {
//       next(error);
//     }
//   };


const postCompras = async (req, res, next) => {
     const { userEmail, total, listProd} = req.body;
     try {
         const obj = { total, userEmail }
         const newCompra = await Compras.create(obj)
          for (let i = 0; i < listProd.length; i++) {
            console.log(listProd[i])
              const prod = await Products.findByPk(listProd[i].id) 
              const cantidad = listProd[i].cantidad
              await newCompra.addProduct(prod, { through: { cantidad: cantidad } })
          }
        res.json('exito')
     } catch (error) {
         next(error)
     }
}

module.exports = {
    getAllCompras,
    postCompras
}