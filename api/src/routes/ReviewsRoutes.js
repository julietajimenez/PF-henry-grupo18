const { Router } = require('express');
const { getAllReviewsFromProduct, addReview, editReview, getReviews } = require('../controllers/ReviewsControllers');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/', getReviews)
router.get('/:idProduct', getAllReviewsFromProduct)
router.post('/create', addReview)
router.put('/edit', editReview)

module.exports = router;