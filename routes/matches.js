var express = require('express');
	router = express.Router();
var respond = require('../extras/responder');

var matches = require('../models/matches');
router.route('/')
	.post(function(req,res){
		matches.create(req.body, function(error,result) {
			if(error)
				console.log(error)
			else{
				respond(res,false,'Match Created',result)
			}
		})
	})
	.get(function(req,res) {
		matches.getAll(function(error,result) {
			if(error)
				console.log(error)
			else
				respond(res,false,'All Matches', result);
		})
	})

router.route('/in/:tournament_id')
	.get(function(req,res) {
		matches.getByTournament(req.params.tournament_id, function(error,result) {
			console.log(result)
			if(error)
				console.log(error)
			else
				respond(res,false,'Matches in Tournament', result);
		})
	})

router.route('/:id/won_by/team1')
	.put(function(req,res) {
		matches.assignWinner(req.params.id, 'team1', function(error, result) {
			if(error)
				console.log(error)
			else
				respond(res,false,'Team1 won the match', result)
		})
	})

router.route('/:id/won_by/team2')
	.put(function(req,res) {
		matches.assignWinner(req.params.id, 'team2', function(error, result) {
			if(error)
				console.log(error)
			else
				respond(res,false,'Team2 won the match', result)
		})
	})

module.exports = router;