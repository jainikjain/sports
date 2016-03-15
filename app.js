var express=require("express"),
    bodyParser=require("body-parser"),
    db=require("./models/db");

var counter=require("./models/schemas/counters");

var colleges=require("./routes/colleges"),
    games=require("./routes/games"),
    participants=require("./routes/participants"),
    users=require("./routes/users")


var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use("/colleges",colleges);
app.use("/games",games);
app.use("/participants",participants);
app.use("/users",users);

app.listen(3000,function(){
  console.log("Sports Api Up");
})
