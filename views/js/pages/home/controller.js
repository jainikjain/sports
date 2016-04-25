pages.controller('HomePageController', function($scope, tournamentService){
  $scope.tournaments = [];
  tournamentService.byCreator({id: localStorage.getItem('sports_associated_user')}, function(response) {
    $scope.tournaments = response.body;
  })
})