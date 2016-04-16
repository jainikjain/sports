var express=require("express"),
    router=express.Router();
var respond=require("../extras/responder");

var participants=require("../models/participants");

router.route("/")
  .post(function(req,res){
    participants.create(req.body,function(error,result){
      if(error)
        console.log(error);
      respond(res,false,"Participant Registered",{participantId:result.partId})
    })
  })

router.route('/forGame/:gameId')
	.get(function(req,res) {
		participants.getByGameId(req.params.gameId, function(error,result) {
			if(error) {
				console.log(error);
			}
			else {
				respond(res,false,'Participants Data',result)
			}
		})
	})
module.exports=router;
