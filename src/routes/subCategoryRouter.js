const express = require('express')
const { addSubCategory, getAllSubCategory,deleteSubCategory, updateSubCategory,getSingleSubCategory } = require('../controller/subCategoryController')
const { authMiddleware } = require('../middleware/AuthMiddleware') 
const subCategoryRoute = express.Router()
subCategoryRoute.post("/subcategory",addSubCategory)



subCategoryRoute.use(authMiddleware);  

subCategoryRoute.get("/subcategory",getAllSubCategory)
subCategoryRoute.get("/subcategory/:subCategory_id",getSingleSubCategory)
subCategoryRoute.delete("/subcategory/:subCategory_id",deleteSubCategory)
subCategoryRoute.put("/subcategory/:subCategory_id",updateSubCategory)
module.exports = subCategoryRoute


