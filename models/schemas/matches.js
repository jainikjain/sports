var mongoose = require('mongoose');

var matchSchema = new mongoose.Schema({
	tournament:{type: mongoose.Schema.Types.ObjectId, ref: 'tournaments'},
	team1: { type: mongoose.Schema.Types.ObjectId, ref: 'teams'},
	team2: { type: mongoose.Schema.Types.ObjectId, ref: 'teams'},
	date: { type: Date, required: true},
	wonBy: {type: String, enum: ['team1', 'team2']}
})

module.exports = mongoose.model('matches',matchSchema);