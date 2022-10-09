const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ProductsRoutes = require("./ProductsRoutes.js");
const UsersRoutes = require('./UsersRoutes.js');
const CategoryRoutes = require("./CategoryRoutes");
const PaymentRoutes = require("./PaymentRoutes");
const ReviewsRouter = require('./ReviewsRoutes')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", ProductsRoutes);
router.use("/users", UsersRoutes);
router.use("/category", CategoryRoutes);
router.use("/buy", PaymentRoutes);
router.use("/reviews", ReviewsRouter);

module.exports = router;
