const { Router } = require('express');
const { getAllUsers, postUsers, updateUser, getUserById } = require('../controllers/UsersControllers');
const { login, register } = require('../controllers/LoginController');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', getAllUsers)
router.post('/create', postUsers)
router.put('/update/:id', updateUser)
router.get('/byId/:id', getUserById)
router.post('/login', login)
router.post('/register', register)

module.exports = router;