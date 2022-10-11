const { Router } = require('express');
const { getAllUsers, postUsers, updateUser, getUserById, confirm, verifyUser,  getCompras } = require('../controllers/UsersControllers');
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
router.get('/getCompras/:compras', getCompras)
router.post('/login', login)
router.post('/register', register)
router.get('/confirmed/:token', confirm)
router.put('/verify/:id', verifyUser)


module.exports = router;