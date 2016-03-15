var participantData=require("./schemas/participants");
// var college=require("./colleges")
var participant={};

participant.create=function(data,callback){
  var new_participant=new participantData(data);
  new_participant.save(function(error,result){
    callback(error,new_participant);
  })
}

participant.getAll=function(callback){
  participantData.find({},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

participant.getById=function(userId,callback){
  participantData.findOne({"userId":userId},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

module.exports=participant;
