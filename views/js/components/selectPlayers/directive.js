selectPlayers.directive('selectPlayers', function() {
	return {
		templateUrl: './js/components/selectPlayers/template.html',
		controller: 'SelectPlayersController',
		replace: true
	}
})