teamCreateForm.controller('TeamCreateFormController', function($scope, tournamentService, teamService, $uibModal) {
	$scope.tournaments = [];
	tournamentService.get(function(response) {
		$scope.tournaments = response.body;
	})

	$scope.createTeam = function() {
		var team = new teamService();
		team.name = $scope.name;
		team.teamGender = 'M'
		team.tournament = $scope.tournament;
		if( !team.name || !team.teamGender || !team.tournament) {
			$scope.createTeamMsg = 'Enter All the details to create team';
		}
		else {
			$scope.createTeamMsg = 'Sending Data...';
			team.$create(function(result) {
				if(result.message === 'Team Created') {
					tournamentService.get({id: $scope.tournament}, function(response) {
						debugger;
						var selectPlayerModal = $uibModal.open({
							templateUrl: './js/components/selectPlayers/template.html',
							controller: 'SelectPlayersController',
							size: 'lg',
							resolve: {
								noOfPlayers: function() {
									return response.body.game.noOfPlayers;
								},
								tournamentId: function() {
									return $scope.tournament;
								},
								teamId: function() {
									return team._id;
								}
							}
						})
					})
					$scope.createTeamMsg = 'Team Created...'

				}
			})
		}
	}
})