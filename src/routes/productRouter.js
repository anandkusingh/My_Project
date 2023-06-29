const express = require('express')
const { addProduct, getAllProduct,deleteProduct, updateProduct,getSingleProduct } = require('../controller/productController')
const { authMiddleware } = require('../middleware/AuthMiddleware') 
const productRoute = express.Router()
productRoute.post("/product",addProduct)
productRoute.use(authMiddleware); 

productRoute.get("/product",getAllProduct)
productRoute.get("/product/:product_id",getSingleProduct)
productRoute.delete("/product/:product_id",deleteProduct)
productRoute.put("/product/:product_id",updateProduct)
module.exports = productRoute

