const { Router } = require('express');
const { getAllUsers, postUsers, updateUser, getUserById } = require('../controllers/UsersControllers');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getAllUsers)
router.post('/create', postUsers)
router.put('/update/:id', updateUser)
router.get('/byId/:id', getUserById)

module.exports = router;