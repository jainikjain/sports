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

module.exports = router;