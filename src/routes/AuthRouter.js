const express = require('express')
const multer = require('multer')
const authRouter = express.Router()
const AuthController = require('../controller/AuthController');

//multer().none()

authRouter.post("/login",AuthController.login)
authRouter.post("/signup",AuthController.signup)


module.exports = authRouter