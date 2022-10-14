const { Router } = require('express');
const { getAllCompras, postCompras } = require('../controllers/ComprasControllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.get('/:userEmail', getAllCompras)
router.post('/comprar', postCompras)


module.exports = router;