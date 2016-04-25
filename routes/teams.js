var express = require('express');
var router = express.Router();
var respond = require('../extras/responder');

var teams = require('../models/teams');

router.route("/")
	.post(function(req,res) {
		console.log(req.body);
		teams.create(req.body,function(error,result) {
			if(error)
					console.log(error)
			else {
				respond(res,false,'Team Created',result)
			}
		})
	})
	.get(function(req,res) {
		teams.getAll(function(error,result) {
			if(error)
				console.log(error);
			else {
				respond(res,false,'All Teams', result);
			}
		})
	})

router.route('/of_tournament/:id')
	.get(function(req,res) {
		teams.getByTournament(req.params.id, function(error,result) {
			if(error) {
				console.log(error)
			}
			else {
				respond(res, false, 'Teams Of Tournament', result)
			}
		})
	})

router.route('/:id/add_player/:player_id')
	.put(function(req,res) {
		teams.addPlayer(req.params.id, req.params.player_id, function(error,result) {
			if(error) {
				console.log(error)
			}
			else {
				respond(res, false, 'Player Added', result);
			}
		})
	})

router.route("/:id")
	.get(function(req,res) {
		teams.getById(req.params.id, function(error,result) {
			if(error) {
				console.log(error)
			}
			else {
				respond(res, false, 'Team Info', result);
			}
		})
	})



module.exports = router;