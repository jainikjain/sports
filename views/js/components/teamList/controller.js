teamList.controller('TeamListController', function($scope, teamService) {
	teamService.get(function(result) {
		$scope.teams = result.body
	})

	$scope.select = function(team) {
		console.log(team);
		$scope.selectedTeam = team;
	}
})