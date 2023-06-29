const { ObjectId } = require("mongodb");
const subCategoryModel = require("../model/subCategoryModel");


exports.addSubCategory = async (request,response,next)=>{
    try{
        const reqData = request.body;
        const subCategoryData = {
            subCategoryName:reqData.subCategoryName,
            subCategoryTitle:reqData.subCategoryTitle,
            
        }

        const dbRes = await subCategoryModel.create(subCategoryData);
        if(dbRes){
            response.json({
                status:"success",
                message:"subCategory Add Successfully"
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


exports.updateSubCategory = async (request,response,next)=>{
    try{
        const reqData = request.body;
        const subCategory_id = request.params.subCategory_id
        
        const subCategoryData = {

            subCategoryName:reqData.subCategoryName,
            subCategoryTitle:reqData.subCategoryTitle,
           
        }

        const dbRes = await subCategoryModel.updateOne({_id:subCategory_id},subCategoryData);
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



exports.getAllSubCategory = async (request,response,next)=>{
    try{
      

        const dbRes = await subCategoryModel.find({});
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


exports.deleteSubCategory = async (request,response,next)=>{
    try{
         const subCategory_id = request.params.subCategory_id
        const dbRes = await subCategoryModel.deleteOne({_id:subCategory_id});
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

exports.getSingleSubCategory = async (request,response,next)=>{
    try{
      
        const subCategory_id = request.params.subCategory_id

        const dbRes = await subCategoryModel.find({_id:subCategory_id});
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