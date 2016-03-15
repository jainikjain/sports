var mongoose=require("mongoose");

var tokenSchema=new mongoose.Schema({
  tokenValue:{type:String,required:true},
  creationTime:{type:Date,default:Date.now},
  expirationTime:{type:Date,default:null},
  associatedUser:{type:mongoose.Schema.Types.ObjectId,ref:"users"}
})

module.exports=mongoose.model("tokens",tokenSchema);
