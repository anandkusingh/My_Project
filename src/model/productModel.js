const mongoose = require('mongoose')
require('../config/Db');
const Collection = require('../config/Collection');
const productSchema =  new mongoose.Schema({
    productName:{type:String,required:[true,"productName is Required field"]},
    productTitle:{type:String,required:[true,"productTitle is Required"]},
    productPrice:{type:String,required:[true,"productPrice is Required"]},
    productBrand:{type:String,required:[true,"productBrand is Required"]},
    productUnit:{type:String,required:[true,"productUnit is Required"]},
    productStatus:{type:String,required:[true,"productStatus is Required"]},
    productRating:{type:String,required:[true,"productRating is Required"]},
    productDescription:{type:String,required:[true,"productDescription is Required"]},
    subCategory_id:{type:mongoose.Schema.ObjectId},
    category_id:{type:mongoose.Schema.ObjectId},
    // image:{type:String,required:[true,"image is required"]} 

 
}

)


const productModel = mongoose.model(Collection.productInfo,productSchema);

module.exports = productModel