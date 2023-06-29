// const events = require('events')
// var eventEmitter = new events.EventEmitter()
// var i = 0
// eventEmitter.on('kk',function(){

//     console.log(++i)
// })

// eventEmitter.emit('kk');
// eventEmitter.emit('kk');
// eventEmitter.emit('kk');
// const path = require('path')
// const fs = require('fs')
// const fs = require('fs')
// // try{
// //  fs.mkdirSync("jhakas")
// // }
// // catch(err){
// // }


//  fs.readFile("d.txt",'utf8',function(err,data){
//     if(!err){
//         console.log(data)
//     }
   
//  })
// console.log("hiii")



// // try{
// // fs.unlinkSync("dd.txt")
// // }catch(err){

// // }



// // try{
// //     fs.rmdirSync("jhakas")
// //     }catch(err){
    
// //     }


// console.log(__dirname)
//  const dir = path.join(__dirname,"/src/kk.txt");
// // fs.unlinkSync(dir)
// var f = path.extname(dir)

// console.log(f)
// var f = path.basename(dir)
// console.log(f)

// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// var server = http.createServer(async function(req,res){
//     try{
//     const url = req.url
//     console.log(url)
//     const a = 56;
//     if(url === "/api" && req.method === "GET"){
//        const html = `<html>
//        <head>
//        </head>
//        <body>
//         <h1>Hello ${56}</h1>
//        </body>
//        </html>`
//        res.setHeader("Content-type","application/pdf")
//        res.end(html)
//     }
//     else if(url === "/readFile"){
//          const dir = path.join(__dirname,"/src/kk.txt");
//          const data =   fs.readFileSync(dir,"utf8");
//          res.end(JSON.stringify({bhejo_na:data}))
//     }
//     else if(url === "/deleteFile"){
//         const dir = path.join(__dirname,"/src/kk.txt");
//         const data =   fs.unlinkSync(dir);
//         res.end(JSON.stringify({bhejo_na:"Delete Kar diya"}))
//    }
//     else{
//         res.end(JSON.stringify({status:'failed'}))
//     }
// }catch(err){
//     res.end(JSON.stringify({status:'Exception Occor'}))
// }
   
// })


// server.listen(3452,function(){
//     console.log(`Server Started http://localhost:3452`)
// })



    

require('dotenv').config()
const app = require('./app');
const http = require('http')
const server = http.createServer(app)

const PORT = process.env.PORT
const HOST = process.env.HOST

server.listen(PORT,HOST,function(){
    console.log(`server started http://${HOST}:${PORT}`)
})
