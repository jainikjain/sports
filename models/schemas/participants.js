var mongoose=require("mongoose");
var participantSchema=new mongoose.Schema({
  partId:{type:String},
  name:{type:String,required:true},
  gender:{type:String,require:true,enum:["M","F"], default: 'M'},
  tournament:{type: mongoose.Schema.Types.ObjectId, ref: 'tournaments'}
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
