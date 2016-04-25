var userData=require("./schemas/users");
var token=require("./tokens");
var encrypt=require("../extras/encrypt");
var user={};

user.create=function(data,callback){
  new userData(data).save(function(error,result){
    callback(error,result);
  })
}

user.getAll=function(callback){
  userData.find({},{_id:0,__v:0,password:0},function(error,result){
    callback(error,result);
  })
}

user.getById=function(userId,callback){
  userData.findOne({"userId":userId},{_id:0,__v:0,password:0},function(error,result){
    callback(error,result);
  })
}

user.getByPhone=function(phone,callback){
  userData.findOne({"phone":phone},{_id:0,__v:0,password:0},function(error,result){
    callback(error,result);
  })
}

user.getByEmail=function(email,callback){
  userData.findOne({"email":email},{_id:0,__v:0,password:0},function(error,result){
    callback(error,result);
  })
}

user.block=function(userId,callback){
  userData.findByIdAndUpdate({"userId":userId},{$set:{userBlocked:true}},function(error,numAffected){
    callback(error,numAffected);
  })
}

user.signIn=function(data,callback){
  userData.findOne({"email":data.email,"password":data.password},function(error,result){
    var sent={};
    if(result==null){
      sent.invalid=true;
      callback(error,sent);
    }
    else if(result.userBlocked === 'true'){
        sent.blocked=true;
        callback(error,sent);
    }
    else {
      tokenData={"tokenValue":encrypt(result._id),associatedUser:result._id};
      token.create(tokenData,function(error,newToken){
        console.log(newToken);
        sent.tokenValue=newToken.tokenValue;
        // sent.userId = associatedUser
        callback(error,newToken);
      })
    }
  })
}

module.exports=user;
