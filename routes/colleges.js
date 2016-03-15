var express=require("express"),
    router=express.Router();
var respond=require("../helpers/responder");

var colleges=require("../models/colleges");

router.route("/")
  .post(function(req,res){
    colleges.create(req.body,function(error,result){
      if(error)
        console.log(error);

    });
  })
  .get(function(req,res){
    colleges.getAll(function(error,result){
      if(error)
        console.log(error);
      respond(res,false,"College Data Received",result);
    })
  })

module.exports=router;
