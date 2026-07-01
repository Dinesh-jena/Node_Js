
function checkAuth(req,res,next){
    const token = req.cookies.token;
     console.log("Checking Authentication:-",token);
    next();
 

}

module.exports=checkAuth;