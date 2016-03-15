var mongoose=require("mongoose");
var participantSchema=new mongoose.Schema({
  partId:{type:String},
  name:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:String,required:true,max:10,min:10},
  gender:{type:String,require:true,enum:["M","F"]},
  college:{type:mongoose.Schema.ObjectId,ref:"colleges"},
  course:{type:String,default:"other"},
  year:{type:Number,enum:[1,2,3,4,5]}
})

participantSchema.pre("save",function(next){
  var obj=this;
  mongoose.model("counters").findByIdAndUpdate("participantCounter",{$inc:{seq:1}},{upsert:true,new:true},function(error,result){
    if(error)
      next(error);
    obj.partId=result.seq;
    next();
  })
})

module.exports=mongoose.model("participants",participantSchema);
