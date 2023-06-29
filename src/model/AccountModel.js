const mongoose = require('mongoose')
require('../config/Db');
const Collection = require('../config/Collection');
const { genPasswordHash } = require('../utils/utils');
const accountSchema =  new mongoose.Schema({
    name:{type:String,required:[true,"Name is Required field"]},
    email:{type:String,required:[true,"Email is Required"],unique:true},
    password:{type:String,required:[true,"Password is Required"]},
    isActive:{type:Boolean,default:false},
    // Polo:[{name:String}]
},
{timestamps:true}
)

accountSchema.pre("save",function(){
    this.password = genPasswordHash(this.password);
})

const AccountModel = mongoose.model(Collection.account,accountSchema);

module.exports = AccountModel

