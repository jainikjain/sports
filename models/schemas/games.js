var mongoose=require("mongoose");

var gameSchema=new mongoose.Schema({
  gameId:{type:String},
  name:{type:String,required:true},
  for:{type:String,enum:["M","F","B"],default:"B"},
  isTeamGame:{type:Boolean,default:false},
  noOfPlayers:{type:Number,default:1},
  registrationOpen:{type:Boolean,default:true},
  creationDate:{type:Date,default:Date.now}
})
gameSchema.pre("save",function(next){
  var obj=this;
  mongoose.model("counters").findByIdAndUpdate("gamesCounter",{$inc:{seq:1}},{upsert:true,new:true},function(error,result){
    if(error)
      next(error);
      obj.gameId=result.seq;
      next();
  })
})

module.exports=mongoose.model("games",gameSchema);
