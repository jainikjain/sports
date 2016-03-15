var express=require("express"),
    router=express.Router();

var users=require("../models/users");

router.route("/")
  .post(function(req,res){
    users.create(req.body,function(error,result){
      if(error)
        console.log(error);
      console.log(result);
    })
  })
  .get(function(req,res){
    users.getAll(function(error,result){
      if(error)
        console.log(error)
      console.log(result);
    })
  })

router.route("/signin")
  .post(function(req,res){
    users.signIn(req.body,function(error,result){
      if(error)
        console.log(error);
      if(result.invalid)
        respond(res,true,"Invalid Login",{"InvalidLogin":true});
      else if(result.blocked)
        respond(res,true,"User Blocked",{"UserBlocked":true});
      else {
        respond(res,false,"User Logged In",{tokenId:result.tokenId});
      }
    })
  })

router.route("/:id")
  .get(function(req,res){
    users.getById(req.params.id,function(error,result){
      if(error)
        console.log(error)
      console.log(result);
    })
  })

module.exports=router;
