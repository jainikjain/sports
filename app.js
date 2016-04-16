var express=require("express"),
    bodyParser=require("body-parser"),
    db=require("./models/db");

var counter=require("./models/schemas/counters");

var games=require("./routes/games"),
    participants=require("./routes/participants"),
    users=require("./routes/users"),
    teams = require('./routes/teams'),
    tournaments = require('./routes/tournaments'),
    matches = require('./routes/matches')


var app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('views'));

app.use("/games",games);
app.use("/participants",participants);
app.use("/users",users);
app.use('/teams',teams);
app.use('/tournaments',tournaments);
app.use('/matches', matches);
app.get('/',function(req, res) {
  res.sendFile( __dirname + '/views/index.html');
});

app.listen(3000,function(){
  console.log("Sports Api Up");
})
