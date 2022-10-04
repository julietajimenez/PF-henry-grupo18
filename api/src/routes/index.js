const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ProductsRoutes = require("./ProductsRoutes.js");
const UsersRoutes = require('./UsersRoutes.js');
const CategoryRoutes = require("./CategoryRoutes");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", ProductsRoutes);
router.use("/users", UsersRoutes);
router.use("/category", CategoryRoutes);


module.exports = router;
