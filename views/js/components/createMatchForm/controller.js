createMatchForm.controller('CreateMatchFormController', function($scope, tournamentService, teamService, matchService) {
  $scope.matchCreateMsg = '';
  $scope.createMatch = function() {
    var match  = new matchService();
    match.tournament = $scope.tournament;
    match.team1 = $scope.team1;
    match.team2 = $scope.team2;
    var date = new Date($scope.year, $scope.month - 1, $scope.date);
    match.date = date;
    if(!$scope.tournament || !$scope.team1 || !$scope.team2 || !date) {
      $scope.matchCreateMsg = 'Fill all the fields to create a match';
    }
    else if(!date instanceof Date) {
      $scope.matchCreateMsg = 'Enter a valid date';
    }
    else if ($scope.team1 === $scope.team2) {
      $scope.matchCreateMsg = 'A match can`t be between two same teams please select different teams';
    } 
    else {
      match.$save(function(response) {
        $scope.matchCreateMsg = 'Match Created';
    })  
    }
    
  }
  $scope.tournaments = [];
  $scope.teams = [];
  if($scope.tournamentId) {
    $scope.tournament = $scope.tournamentId
  }
  tournamentService.get(function(response) {
    if(response.message === 'All Tournaments') {
      $scope.tournaments = response.body;
    }
  })

  $scope.loadTournament = function() {
    teamService.getOfTournament({tournament_id: this.tournament}, function(response) {
      if(response.message === 'Teams Of Tournament') {
        $scope.teams = response.body;
      }
    }) 
  }


})