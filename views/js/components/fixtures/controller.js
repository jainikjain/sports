fixtures.controller('FixturesController', function($scope, tournamentService, teamService, matchService) {
  $scope.teamsToBeSent = [];
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
        $scope.createMatch($scope.teams[home],$scope.teams[away], 'Round' + (round + 1), function(response) {
          debugger;
          $scope.matches.push({
            team1: _.where($scope.teams,{_id: response.body.team1})[0],
            team2: _.where($scope.teams,{_id: response.body.team2})[0],
            day: response.body.day,
            _id: response.body._id
          })  
        })
        
      }
    $scope.fixtureMessage = 'Fixture Created';

    }
  }

  $scope.createMatch = function(team1,team2, day, callback) {
    var match = new matchService();
    match.team1 = team1._id;
    match.team2 = team2._id;
    match.day = day;
    match.$create(function(response) {
      callback(response);
    })
  }

  $scope.team1Win = function(matchId) {
    matchService.wonByTeam1({id: matchId}, function(response) {
      alert('Team1 wins the match');
      var index = _.findIndex($scope.matches, {_id: matchId})
      $scope.matches[index].wonBy= 'team1';
      var teamIndex = _.findIndex($scope.teamsToBeSent,{
        _id: $scope.matches[index].team1._id
      })
      if(teamIndex >= 0) {
        $scope.teamsToBeSent[teamIndex].points++;
      }
      else {
        $scope.teamsToBeSent.push({
          _id: $scope.matches[index].team1._id,
          name: $scope.matches[index].team1.name,
          points: 1
        })
      }
    })
  }

  $scope.team2Win = function(matchId) {
    matchService.wonByTeam2({id: matchId}, function(response){
      alert('Team2 wins the match');
      var index = _.findIndex($scope.matches, {_id: matchId})
      $scope.matches[index].wonBy= 'team2';
      var teamIndex = _.findIndex($scope.teamsToBeSent,{
        _id: $scope.matches[index].team2._id
      })
      if(teamIndex >= 0) {
        $scope.teamsToBeSent[teamIndex].points++;
      }
      else {
        $scope.teamsToBeSent.push({
          _id: $scope.matches[index].team2._id,
          name: $scope.matches[index].team2.name,
          points: 1
        })
      }
    })
  }
})