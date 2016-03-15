module.exports=function(res,error,message,body,status){
  if(status)
    stat=status;
  else if(error)
    stat=500;
  else {
    stat=200;
  }
  res.send({
    "error":error,
    "message":message,
    "body":body,
    "status":stat
  })
}
