const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../constant/Constant');

exports.authMiddleware = async (request,response,next)=>{
try{
  const token =   request.headers["authorization"].split(" ")[1]
  const verify = jwt.verify(token,JWT_SECRET_KEY);
  let current_Time = Date.now();
  let token_time = verify.time;
  let days_30_time = 1000*60*60*24*30
  let remaining_time = (current_Time - token_time);
// console.log(remaining_time,days_30_time)

  if(verify && remaining_time <= days_30_time){
    request.name = verify.name;
    request.user_id = verify.user_id
    next()
  }
  else{
   response.status(401).json({
    status:"failed",
    message:"Unauthorized token was expired !"
   })
}
}
catch(err){
    response.status(401).json({
        status:"failed",
        message:"Unauthorized token was expired ! catch error"
       }) 
}
}
