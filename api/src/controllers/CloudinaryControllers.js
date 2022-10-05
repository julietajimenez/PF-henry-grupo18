/* const  axios  = require('axios')
const {cloudinary} = require('../utils/cloudinary.js')

const postCloudinary = async (req, res, next) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.
        upload(fileStr, {
            upload_preset: 'Ecommerce'
        })
        console.log(uploadedResponse);
        res.json(uploadedResponse)
    } catch (error) {
        next(error)
        res.status(500).json({ err: 'Algo salió mal' });
    }
} 
module.exports = {
    postCloudinary }
    */