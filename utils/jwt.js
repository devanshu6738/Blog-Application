const jwt=require("jsonwebtoken");

function generatejwt(payload){
    let token= jwt.sign(payload,"devanshugupta",{expiresIn:'2h'})
    return token;
}
function verifyjwt(token){
    let isValid=jwt.verify(token,"devanshugupta")
    return isValid;
}

module.exports={generatejwt,verifyjwt};