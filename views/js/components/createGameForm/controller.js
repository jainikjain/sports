createGameForm.controller('CreateGameFormController', function($scope,gameService) {
	$scope.createGame = function() {
		var game = new gameService();
		game.name = $scope.name;
		game.for = $scope.for;
		game.isTeamGame = $scope.isTeamGame;
		if($scope.isTeamGame) {
			game.noOfPlayers = $scope.noOfPlayers;
		}
		game.registrationOpen = $scope.registrationOpen;
		$scope.createGameMsg = 'Sending Data....';
		game.$create(function(result) {
			if(result.message == 'Game created') {
				$scope.createGameMsg = 'Game Created';
				$scope.name = '';
				$scope.for = '';
				$scope.isTeamGame = false;
				$scope.noOfPlayers = '';
				$scope.registrationOpen = true;
			}
		})
	}
})