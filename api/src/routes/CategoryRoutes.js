const { Router } = require('express');
const { getAllCategory, postCategory, updateCategory } = require('../controllers/CategoryControllers');


const router = Router();

router.get('/', getAllCategory)
router.post('/create', postCategory)
router.put('/update/:id', updateCategory)

module.exports = router;
