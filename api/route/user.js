var db = require('../config/mongo-database-connect.js');
 
exports.login = function(req,res){
  db.loginModel.findOne({username:req.body.uDetails.uName},function(err,user){
    if(!user){
      res.json({"logStatus":"out"});
    }
    else if(req.body.uDetails.pwd===user.password){
        req.session.user=user;
        user.password = "";
        user._id = "";
        res.json(user);
      }
      else{
        res.json({"logStatus":"passwordout"});
       }
  })
};

exports.logout = function(req,res){
    res.json({"logStatus":"logout"});
}
