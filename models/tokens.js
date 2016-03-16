var tokenData=require("./schemas/tokens");
var token={};

token.create=function(data,callback){
  newToken=new tokenData(data);
  newToken.save(function(error){
    callback(error,newToken);
  })
}

token.getByTokenId=function(tokenId,callback){
  tokenData.findOne({"tokenId":tokenId}).populate(associatedUser,"-_id -__v -password").exec(function(error,result){
    callback(error,result);
  })
}

token.getActiveTokens=function(callback){
  tokenData.find({"expirationTime":null}).populate(associatedUser,"-_id -__v -password").exec(function(error,result){
    callback(error,result);
  })
}

token.expireToken=function(tokenId,callback){
  tokenData.update({"tokenId":tokenId,"expirationTime":null},{$set:{expirationTime:Date.now()}},function(error,numAffected){
    callback(error,numAffected);
  })
}

module.exports = token;