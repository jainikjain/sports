selectPlayers.controller('SelectPlayersController', function($scope, noOfPlayers, tournamentId, participantService, $uibModalInstance, teamId) {
	debugger;
	$scope.numberArray = [];
	for(i = 0; i < noOfPlayers; i++) {
		$scope.numberArray.push(i);
	}
	$scope.name = [];

	$scope.closeModal=function(){
		$uibModalInstance.close();
	}

	$scope.selectPlayers = function() {
		debugger;
		var length;
		for(i in $scope.name) {
			length = (Number(i) + 1);
		}
		if(length === noOfPlayers) {
			for(i in $scope.name) {
				var participant = new participantService();
				participant.name = $scope.name[i];
				participant.gender = 'M';
				participant.tournament = tournamentId;
				var registered = 0;
				participant.$save(function(response) {
					debugger;
					registered++;
					if(registered == noOfPlayers) {
						alert("All the players registered");
						$scope.assignTeams()
						$scope.closeModal();
					}
				})

			}
		}
		else {
			alert("Please fill all the players");
		}
	}

})