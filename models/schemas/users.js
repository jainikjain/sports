var mongoose=require("mongoose");
var rolesEnum=['ORGANIZER', 'PLAYER'];
var userSchema=new mongoose.Schema({
  userId:{type:String},
  name:{type:String,required:true},
  email:{type:String,required:true},
  phone:{type:String,required:true,min:10,max:10},
  role:{type:String,enum:rolesEnum, default: 'ORGANIZER'},
  password:{type:String,required:true},
  userBlocked:{type:String,default:false}
})

userSchema.pre("save",function(next){
  var obj=this;
  mongoose.model("counters").findByIdAndUpdate("userCounters",{$inc:{seq:1}},{upsert:true,new:true},function(error,result){
    if(error)
      next(error)
    obj.userId=result.seq;
    next();
  })
})

module.exports=mongoose.model("users",userSchema);
