var mongoose = require('mongoose');
var tournamentData = require('./schemas/tournaments');
var tournament = {};

tournament.create = function(data, callback) {
	var new_tournament = new tournamentData(data);
	new_tournament.save(function(error, result) {
		callback(error, new_tournament);
	})
}

tournament.getAll = function(callback) {
	tournamentData.find({},function(error,result) {
		callback(error,result);
	})
}

tournament.getById = function(tournamentId, callback) {
	tournamentData.findOne({'_id': tournamentId}).populate('game creator').exec(function(error, result) {
		callback(error, result);
	})
}

tournament.getByCreator = function(userId, callback) {
	tournamentData.find({creator: userId}).populate('game').exec(function(error,result) {
		callback(error,result);
	})
}

module.exports = tournament;