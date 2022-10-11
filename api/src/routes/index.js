const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const ProductsRoutes = require("./ProductsRoutes.js");
const UsersRoutes = require('./UsersRoutes.js');
const CategoryRoutes = require("./CategoryRoutes");

const ReviewsRouter = require('./ReviewsRoutes')
const cloudinary = require('../utils/cloudinary')
const {Products} = require('../db.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/products", ProductsRoutes);
router.use("/users", UsersRoutes);
router.use("/category", CategoryRoutes);
/* router.use("/cloudinary", CloudinaryRoutes); */



router.get('/images', async (_req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:online-shop')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();

    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

router.post('/upload', async (req, res) => {
    const {file, name} = req.body;
    try {
        const uploadResponse = await cloudinary.uploader.upload(file, {
            upload_preset: 'online-shop',
        });
        const productImage = await Products.update({
            image: uploadResponse.url
        },{
            where: {name: name }
        })
        res.json(productImage);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
});
router.use("/reviews", ReviewsRouter);

module.exports = router;
