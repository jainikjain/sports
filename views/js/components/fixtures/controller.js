fixtures.controller('FixturesController', function($scope, tournamentService, teamService, matchService) {
  $scope.fixtureMessage = '';
  $scope.matches = [];
  $scope.setFixtures = function() {
    $scope.fixtureMessage = 'Creating Fixtures';
    var teams = $scope.teams.length;
    var totalRounds = (teams - 1);
    var matchesPerRound = teams / 2;
    for (var round = 0; round < totalRounds; round++) {
      for (var match = 0; match < matchesPerRound; match++) {
        var home = (round + match) % (teams - 1);
        var away = (teams - 1 - match + round) % (teams - 1);        
        if (match == 0) {
            away = teams - 1;
        }
        // $scope.createMatch($scope.teams[home],$scope.teams[away], 'Day' + (round + 1))
        $scope.matches.push({
          team1: $scope.teams[home],
          team2: $scope.teams[away],
          day: 'Day' + (round + 1)
        })
      }
    $scope.fixtureMessage = 'Fixture Created';

    }
  }

  $scope.createMatch = function(team1,team2, day) {
    var match = new matchService();
    match.team1 = team1._id;
    match.team2 = team2._id;
    match.day = day;
    match.$create(function(response) {
      
    })
  }
})