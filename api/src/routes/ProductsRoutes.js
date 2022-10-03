const { Router } = require('express');
const { getAllProducts, getProductById, postProducts, getProductByName, putProducts, deleteProduct, getProductByBrand } = require('../controllers/ProductsControllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', getAllProducts)
router.get('/byId/:id', getProductById)
router.post('/create', postProducts)
router.get('/byName', getProductByName)
router.get('/byBrand', getProductByBrand)
router.put('/update/:id', putProducts)
router.delete('/delete/:id', deleteProduct)

module.exports = router;