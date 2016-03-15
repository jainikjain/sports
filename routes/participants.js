var express=require("express"),
    router=express.Router();
var respond=require("../helpers/responder");

var participants=require("../models/participants");

router.route("/")
  .post(function(req,res){
    participants.create(req.body,function(error,result){
      if(error)
        console.log(error);
      respond(res,false,"Participant Registered",{participantId:result.partId})
    })
  })

module.exports=router;
