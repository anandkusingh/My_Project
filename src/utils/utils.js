const bcrypt = require('bcryptjs')
exports.genPasswordHash = (password)=>{
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt);
}


exports.isValidPassword = (localPass,dbPass)=>{
    return bcrypt.compareSync(localPass,dbPass)
}