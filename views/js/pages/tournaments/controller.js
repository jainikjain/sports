pages.controller('TournamentsPagesController', function($scope, tournamentService, $routeParams, teamService) {
  $scope.tournament = {};
  $scope.matches = {};
  tournamentService.get({id: $routeParams.id}, function(response) {
    $scope.tournament = response.body;
    teamService.getOfTournament({tournament_id: $routeParams.id}, function(response) {
      $scope.teams = response.body;
    })
  })
})