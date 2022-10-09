const { Router } = require('express');
const { getAllReviewsFromProduct, addReview } = require('../controllers/ReviewsControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/:idProduct', getAllReviewsFromProduct)
router.post('/create', addReview)

module.exports = router;