const { JWT_SECRET_KEY } = require("../constant/Constant")
const AccountModel = require("../model/AccountModel")
const { isValidPassword } = require("../utils/utils")
const jwt = require('jsonwebtoken')

exports.signup = async (request, response) => {
    // const data = request.query
    try {
        const data = request.body
        const signupData = {
            name:data.name,
            email:data.email,
            password:data.password
        }
        const res = await AccountModel.create(signupData)
        if (res) {
            response.json({
                status: "success",
                message: "signup successfully",
                userInfo: res
            })
        }
        else{
            response.json({
                status: "failed",
                message: "Opps Error",
            })
        }
    } catch (error) {
        const resError = {}
          resError.status = "failed"
          if (error.name === "ValidationError") {
              let errors = {};
              Object.keys(error.errors).forEach((key) => {
                errors[key] = error.errors[key].message;
              });
              resError.error = errors;
            }
          response.json(resError)
    }
}

exports.login = async (request, response) => {
    try{
        const data = request.body
        const query = {
            $and:[
                {email:data.email},
            ]
        }

       const res =  await AccountModel.findOne(query,{name:1,password:1})
       if(isValidPassword(data.password,res.password))
       {
       if(res){
        const bindData = {
            name:res.name,
            email:data.email,
            user_id:res._id,
            time:Date.now(),
        }

      const token =   jwt.sign(bindData,JWT_SECRET_KEY,{expiresIn:'30d'})
        response.json({
            status:"success",
            message:"Login Successfully",
            token:token,
            data:{
                name:res.name
            }
        })
       }
    }
       else{
        response.json({
            status:"failed",
            message:"Incorrect Email or Password"
        })
       }
    }
    catch(error){
        const resError = {}
        resError.status = "failed"
        resError.error = error
        response.json(resError)
    }
 
  
}