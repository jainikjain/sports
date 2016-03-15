var collegeData=require("./schemas/colleges");
var college={};

college.create=function(data,callback){
  new collegeData(data).save(function(error,result){
    callback(error,result);
  })
}

college.getAll=function(callback){
  collegeData.find({},function(error,result){
    callback(error,result);
  })
}

college.getByCollegeId=function(collegeId,callback){
  collegeData.findOne({"collegeId":collegeId},{"_id":0,__v:0},function(error,result){
    callback(error,result);
  })
}

college.getKey=function(collegeId,callback){
  collegeData.findOne({"collegeId":collegeId},{"_id":1},function(error,result){
    callback(error,{collegeKey:result._id});
  })
}
module.exports=college;
