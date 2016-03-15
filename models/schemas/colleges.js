var mongoose=require("mongoose");
var stateEnum=["MP","DL","TN","JK","AS","GJ","KA"]
var collegeSchema=new mongoose.Schema({
  collegeId:{type:Number},
  name:{type:String,required:true},
  city:{type:String,required:true},
  state:{type:String,required:true,enum:stateEnum}
})

collegeSchema.pre("save",function(next){
  var obj=this;
  mongoose.model("counters").findByIdAndUpdate("collegCounter",{$inc:{seq:1}},{upsert:true},function(error,result){
    if(error)
      next(error);
    obj.collegeId=result.seq;
    next();
  })
})

module.exports=mongoose.model("colleges",collegeSchema);
