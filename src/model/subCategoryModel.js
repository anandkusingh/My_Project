const mongoose = require('mongoose')
require('../config/Db');
const Collection = require('../config/Collection');
const subCategorySchema =  new mongoose.Schema({
    subCategoryName:{type:String,required:[true,"subCategoryName is Required field"]},
    subCategoryTitle:{type:String,required:[true,"subCategoryTitle is Required"]},
     
}

)


const subCategoryModel = mongoose.model(Collection.subCategoryInfo,subCategorySchema);

module.exports = subCategoryModel