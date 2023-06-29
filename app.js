const express = require('express');
const authRouter = require('./src/routes/AuthRouter');

const app = express()
const cors = require('cors');
const subCategoryRoute = require('./src/routes/subCategoryRouter');
const categoryRoute = require('./src/routes/categoryRouter');
const productRoute = require('./src/routes/productRouter');



app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/auth",authRouter)
app.use("/api",categoryRoute)
app.use("/api",subCategoryRoute)
app.use("/api",productRoute)
app.use("/image",express.static("./public/upload"));
module.exports = app;