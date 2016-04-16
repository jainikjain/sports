var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
	name: {type: String, required: true},
	game: {type: mongoose.Schema.Types.ObjectId, ref: 'games'},
	teamGender: {type: String,required: true},
	players: [{type: mongoose.Schema.Types.ObjectId, ref: 'participants'}]
})

module.exports = mongoose.model('teams',teamSchema);