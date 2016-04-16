createTournament.controller('CreateTournamentController', function($scope, gameService, tournamentService) {
	$scope.games = [];
	$scope.createTournamentMsg = '';
	gameService.get(function(response) {
		$scope.games = response.body;
	})

	$scope.createTournament = function() {
		if($scope.name || $scope.game || $scope.noOfTeams) {
			var newTournament = new tournamentService();
			 newTournament.name = $scope.name;
			 newTournament.game = $scope.game;
			 newTournament.noOfTeams = $scope.noOfTeams;
			 $scope.createTournamentMsg = 'Sending Data...';
			 newTournament.$create(function(response) {
			 	if(response.message = 'Tournament Created') {
			 		$scope.createTournamentMsg = 'Tournament Created';
			 	}
			 })
		}
		else {
			$scope.createTournamentMsg = 'Enter All Details';
		}
	}
})