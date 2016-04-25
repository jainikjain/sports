var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
  tournament: {type: mongoose.Schema.Types.ObjectId, ref: 'tournaments'},
	name: {type: String, required: true},
	teamGender: {type: String,required: true},
	players: [{type: mongoose.Schema.Types.ObjectId, ref: 'participants'}]
})

module.exports = mongoose.model('teams',teamSchema);