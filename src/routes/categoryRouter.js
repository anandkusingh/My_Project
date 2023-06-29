const express = require('express')
const { addCategory, getAllCategory,deleteCategory, updateCategory,getSingleCategory, uploadImage, getAllImage, imageDedo, } = require('../controller/categoryController')
const { authMiddleware } = require('../middleware/AuthMiddleware')
const upload = require('../middleware/UploadMiddleWare');

const categoryRoute = express.Router()
categoryRoute.post("/category",addCategory)

categoryRoute.post("/uploadImage",upload.single('image') ,uploadImage)
categoryRoute.get("/allimage",getAllImage)
categoryRoute.get("/imagededo",imageDedo)
categoryRoute.use(authMiddleware); 

categoryRoute.get("/category",getAllCategory)
categoryRoute.get("/category/:category_id",getSingleCategory)
categoryRoute.delete("/category/:category_id",deleteCategory)
categoryRoute.put("/category/:category_id",updateCategory)
module.exports = categoryRoute


