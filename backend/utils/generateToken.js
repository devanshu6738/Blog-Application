const jwt=require("jsonwebtoken")

function generateJwt(payload){
    let token=jwt.sign(payload,"devanshuguptatheworldknow",{expiresIn:"1h"})
    return token;
}
async function isVerifyToken(token){
    let isValid=await jwt.verify(token,"devanshuguptatheworldknow")
    return isValid;
}
module.exports={generateJwt,isVerifyToken}