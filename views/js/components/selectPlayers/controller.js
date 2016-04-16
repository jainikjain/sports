selectPlayers.controller('SelectPlayersController', function($scope, teamService, participantService) {
	$scope.selectPlayerMsg = '';
	teamService.get({id: $scope.teamId}, function(result) {
		participantService.forGame({gameId: result.body.game._id}, function(result) {
			$scope.playersArray = result.body;
			$scope.players = $scope.playersArray;
		})
	})

	$scope.search = function() {
		event.preventDefault();
		if($scope.searchQuery.length != 0) {
			$scope.players = $scope.playersArray.filter(function(player) {
				return player.name.toLowerCase().indexOf($scope.searchQuery.toLowerCase()) > -1
			})
		}
		else {
			$scope.players = $scope.playersArray;
		}
	}

	$scope.selectPlayer= function(id) {
		$scope.selectPlayerMsg = 'Sending Request';
		teamService.addPlayer({id: $scope.teamId, player_id: id}, function(result) {
			if(result.message == 'Player Added') {
				$scope.selectPlayerMsg = 'Player Selected'
				$scope.playersArray = $scope.playersArray.filter(function(player) {
					return player._id != id
				})
				$scope.players = $scope.playersArray;
			}
		})
	}
})