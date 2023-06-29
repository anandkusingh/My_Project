const { ObjectId } = require("mongodb");
const CategoryModel = require("../model/categoryModel");
const ImageModel = require("../model/ImageModel");
exports.addCategory = async (request,response,next)=>{
    try{
        const reqData = request.body;
        const categoryData = {
            categoryName:reqData.categoryName,
            categoryTitle:reqData.categoryTitle,
            
        }

        const dbRes = await CategoryModel.create(categoryData);
        if(dbRes){
            response.json({
                status:"success",
                message:"category Add Successfully"
            })
        }
        else{
            response.json({
                status:"failed",
                message:"Failed"
            })
        }
    }
    catch(err){
        console.log(err)
        response.json({
            status:"failed",
            message:"Error"
        })
    }
}


// Image 

exports.uploadImage = async (request, response, next) => {
    try {
        const data = request.body
        const imagepath = request.image_nikalo_na;
        const res = await ImageModel.create({ name: data.name, image_path: imagepath })
        if (res) {
            response.json({
                status: "upload Image Successfully",
                path: imagepath
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "upload Failed"
        })
    }
}


exports.getAllImage = async (request,response,next)=>{
    try {
        const resData = await ImageModel.find();
        resData.map(ele=>{
            ele.image_path = `${CONSTANT.IMAGE_HOST}${ele.image_path}`
        })
        if (resData) {
            response.json({
                status: "success",
                data: resData
            })
        }
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}


exports.imageDedo = async (request,response,next)=>{
    try {
        const resData = await ImageModel.find();
        resData.map(ele=>{
            ele.image_path = `${CONSTANT.IMAGE_HOST}${ele.image_path}`
        })

        response.render('payment',{myData:resData})
      // response.render('payment',{name:"avneesh"})
       
    }
    catch (err) {
        response.json({
            status: "failed",
            message: "Error"
        })
    }
}

// Image 

exports.updateCategory = async (request,response,next)=>{
    try{
        const reqData = request.body;
        const category_id = request.params.category_id

        console.log(reqData)
        
        const categoryData = {

            categoryName:reqData.categoryName,
            categoryTitle:reqData.categoryTitle,
           
        }

        const dbRes = await CategoryModel.updateOne({_id:category_id},categoryData);
        
        if(dbRes){
            response.json({
                status:"success",
                message:"Update  Successfully"
            })
        }
        else{
            response.json({
                status:"failed",
                message:"Failed"
            })
        }
    }


    catch(err){
        console.log(err)
        response.json({
            status:"failed",
            message:"Error"
        })
    }
}

exports.getAllCategory = async (request,response,next)=>{
    try{
      

        const dbRes = await CategoryModel.find({});
        if(dbRes){
            response.json({
                status:"success",
                data:dbRes,
            })
        }
        else{
            response.json({
                status:"failed",
                message:"Failed"
            })
        }
    }
    catch(err){
        console.log(err)
        response.json({
            status:"failed",
            message:"Error"
        })
    }
}

exports.deleteCategory = async (request,response,next)=>{
    try{
         const category_id = request.params.category_id
        const dbRes = await CategoryModel.deleteOne({_id:category_id});
        console.log(dbRes)
        if(dbRes.deletedCount > 0){
            response.json({
                status:"success",
                message:"Delete Succsssfully"
            })
        }
        else{
            response.json({
                status:"failed",
                message:"delete failed"
            })
        }
    }
    catch(err){
        console.log(err)
        response.json({
            status:"failed",
            message:"Error"
        })
    }
}

exports.getSingleCategory = async (request,response,next)=>{
    try{
      
        const category_id = request.params.category_id

        const dbRes = await CategoryModel.find({_id:category_id});
        if(dbRes){
            response.json({
                status:"success",
                data:dbRes,
            })
        }
        else{
            response.json({
                status:"failed",
                message:"Failed"
            })
        }
    }
    catch(err){
        console.log(err)
        response.json({
            status:"failed",
            message:"Error"
        })
    }
}