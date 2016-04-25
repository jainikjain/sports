var express = require('express');
	router = express.Router();
var respond = require('../extras/responder');

var tournament = require('../models/tournaments');

router.route('/')
	.post(function(req,res) {
		tournament.create(req.body, function(error,result) {
			if(error)
				console.log(error)
			respond(res, false, 'Tournament Created', result);
		})
	})
	.get(function(req,res) {
		tournament.getAll(function(error, result) {
			if(error)
				console.log(error);
			respond(res, false, 'All Tournaments', result);
		})
	})

router.route('/by/:creator_id')
	.get(function(req,res){
		tournament.getByCreator(req.params.creator_id, function(error,result) {
			if(error)
				console.log(error);
			respond(res,false,'All Tournaments By Creator',result);
		})
	})

router.route('/:id')
	.get(function(req,res) {
		tournament.getById(req.params.id, function(error,result) {
			if(error)
				console.log(error);
		respond(res, false, 'Tournament Details', result);
		})
	})

module.exports = router;