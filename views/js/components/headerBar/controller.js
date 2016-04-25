headerBar.controller('HeaderBarController',function($scope, $location) {
	if(localStorage.sports_associated_user) {
    $scope.signOut = true;
  }
  else {
    $scope.signOut = false;
  }

  $scope.signOut = function() {
    debugger;
    localStorage.removeItem('sports_associated_user');
    $location.url('#/sign_in')
    $scope.signOut = false;
  }
})