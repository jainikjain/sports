var teamData = require('./schemas/teams');
var team = {};

team.create = function(data,callback) {
	new teamData(data).save(function(error,result) {
		callback(error,result);
	})
}

team.getAll = function(callback) {
	teamData.find({}).populate('players game').exec(function(error,result) {
		callback(error,result);
	})
}

team.getById = function(id, callback) {
	console.log(id)
	teamData.findOne({"_id": id}).populate('players game').exec(function(error,result) {
		callback(error,result);
	})
}

team.addPlayer = function(teamId, playerId, callback) {
	teamData.update({'_id': teamId}, {$addToSet: {players: playerId } }, function(error, num) {
		callback(error, num);
	})
} 

module.exports = team;