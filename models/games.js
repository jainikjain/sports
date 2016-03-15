var gameData=require("./schemas/games");
var game={};

game.create=function(data,callback){
  new gameData(data).save(function(error,result){
    callback(error,result);
  })
}

game.getAll=function(callback){
  gameData.find({},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

game.getById=function(gameId,callback){
  gameData.findOne({"gameId":gameId},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

game.getByFor=function(param,callback){
  gameData.find({for:param},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

game.getTeamGames=function(callback){
  gameData.find({isTeamGame:true},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

game.getNonTeamGames=function(callback){
  gameData.find({isTeamGame:false},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

game.getOpenGames=function(callback){
  gameData.find({registrationOpen:true},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}

game.getClosedGames=function(callback){
  gameData.find({registrationOpen:false},{_id:0,__v:0},function(error,result){
    callback(error,result);
  })
}
module.exports=game;
