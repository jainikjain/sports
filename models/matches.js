var matchData = require('./schemas/matches');
var match = {};

match.create = function(data, callback) {
	new matchData(data).save(function(error,result) {
		callback(error,result)
	})
}

match.getAll = function(data, callback) {
	matchData.find({}, function(error,result) {
		callback(error,result);
	})
}

match.getByTournament = function(tournamentId, callback) {
	matchData.find({tournament: tournamentId}).populate('team1 team2 tournament').exec(function(error,result) {
		callback(error,result)
	})
}

match.getByTeam = function(teamId, callback) {
	matchData.find({ $or: [ {team: teamId},{team2: teamId} ] }).populate('team1 team2').exec(function(error,result) {
		callback(error,result);
	})
}

match.assignWinner = function(matchId, winner, callback) {
	matchData.update({_id: matchId}, {wonBy: winner}, function(error,result) {
		callback(error,result);
	})
}

module.exports = match;