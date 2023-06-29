const { ObjectId } = require("mongodb");
const ProductModel = require("../model/productModel");

exports.addProduct = async (request,response,next)=>{
    try{
        const reqData = request.body;
        const productData = {
            
            productTitle:reqData.productTitle,
            productName:reqData.productName,
            productPrice:reqData.productPrice,
            productBrand:reqData.productBrand,
            productUnit:reqData.productUnit,
            productStatus:reqData.productStatus,
            productRating:reqData.productRating,
            productDescription:reqData.productDescription,
           

            
        }

        const dbRes = await ProductModel.create(productData);
        if(dbRes){
            response.json({
                status:"success",
                message:"product Add Successfully"
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


exports.updateProduct = async (request,response,next)=>{
    try{
        const reqData = request.body;
        const product_id = request.params.product_id

        console.log(reqData)
        
        const productData = {

            productTitle:reqData.productTitle,
            productName:reqData.productName,
            productPrice:reqData.productPrice,
            productBrand:reqData.productBrand,
            productUnit:reqData.productUnit,
            productStatus:reqData.productStatus,
            productRating:reqData.productRating,
            productDescription:reqData.productDescription,
           
        }

        const dbRes = await ProductModel.updateOne({_id:product_id},productData);
        
        if(dbRes){
            response.json({
                status:"success",
                message:"Update Successfully"
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

exports.getAllProduct = async (request,response,next)=>{
    try{
      
        const dbRes = await ProductModel.find({});
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

exports.deleteProduct = async (request,response,next)=>{
    try{
         const product_id = request.params.product_id
        const dbRes = await ProductModel.deleteOne({_id:product_id});
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

exports.getSingleProduct = async (request,response,next)=>{
    try{
      
        const product_id = request.params.product_id

        const dbRes = await ProductModel.find({_id:product_id});
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