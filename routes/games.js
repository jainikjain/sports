var express=require("express"),
  router=express.Router();
var respond=require("../extras/responder");


var games=require("../models/games");

router.route("/")
  .post(function(req,res){
    games.create(req.body,function(error,result){
      if(error)
        console.log(error);
      respond(res,false,'Game created',result);
    })
  })
  .get(function(req,res){
    games.getAll(function(error,result){
      if(error)
        console.log(error);
      respond(res,false,'All games',result);
    })
  });

router.route("/open")
  .get(function(req,res){
    games.getOpenGames(function(error,result){
      if(error)
        console.log(error)
      console.log(result);
    })
  })

router.route("/closed")
  .get(function(req,res){
    games.getClosedGames(function(error,result){
      if(error)
        console.log(error);
      console.log(result);
    })
  })

router.route("/team_games")
  .get(function(req,res){
    games.getTeamGames(function(error,result){
      if(error)
        console.log(error)
      console.log(result);
    })
  })

router.route("/individual_games")
  .get(function(req,res){
    games.getNonTeamGames(function(error,result){
      if(error)
        console.log(error)
      console.log(result);
    })
  })

router.route("/:id")
  .get(function(req,res){
    games.getById(req.params.id,function(error,result){
      if(error)
        console.log(error)
      console.log(result);
    })
  })
  
module.exports=router;
