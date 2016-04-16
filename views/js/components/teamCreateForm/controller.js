teamCreateForm.controller('TeamCreateFormController', function($scope, gameService, teamService, $location) {
	gameService.get(function(response) {
		$scope.games = response.body;
	})

	$scope.createTeam = function() {
		var team = new teamService();
		team.name = $scope.name;
		team.teamGender = $scope.teamGender;
		team.game = $scope.game;

		if( !team.name || !team.teamGender || !team.game) {
			$scope.createTeamMsg = 'Enter All the details to create team';
		}
		else {
			$scope.createTeamMsg = 'Sending Data...';
			team.$create(function(result) {
				debugger;
				if(result.message = 'Team Create') {
					$scope.createTeamMsg = 'Team Created...'
					$location.path('/select_players/' + team.body._id);
				}
			})
		}
	}
})