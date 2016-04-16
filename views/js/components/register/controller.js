registerComponent.controller("RegisterController",function($scope, participantService, gameService){

  $scope.registerMsg = '';

  gameService.get(function(response) {
    $scope.games = response.body;
  })

  $scope.register=function(){

    if($scope.name && $scope.phone && $scope.genderSelect && $scope.email) {
      var participant = new participantService();
      participant.name = $scope.name;
      participant.phone = $scope.phone;
      participant.gender = $scope.genderSelect;
      participant.email = $scope.email;
      participant.forGame = $scope.game

      $scope.registerMsg = 'Sending Data...';

      participant.$save(function(){
        console.log(participant);
        $scope.registerMsg = 'Participant Registered with Part Id: ' + participant.body.participantId;
      })    
    }
    else {
      $scope.registerMsg = 'Fill all the fields';
    }
  }
})