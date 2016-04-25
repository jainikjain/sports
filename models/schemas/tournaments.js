var mongoose = require('mongoose');

var tournamentSchema = new mongoose.Schema({
	name: { type: String, require: true},
	game: { type: mongoose.Schema.Types.ObjectId, ref: 'games'},
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'users'},
	noOfTeams: { type: Number, required: true }
})

module.exports = mongoose.model('tournaments',tournamentSchema);