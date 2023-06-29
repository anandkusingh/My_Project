const mongoose = require('mongoose')
require('../config/Db');
const Collection = require('../config/Collection');
const categorySchema =  new mongoose.Schema({
    categoryName:{type:String,required:[true,"categoryName is Required field"]},
    categoryTitle:{type:String,required:[true,"categoryTitle is Required"]},
     
}

)


const CategoryModel = mongoose.model(Collection.categoryInfo,categorySchema);

module.exports = CategoryModel







