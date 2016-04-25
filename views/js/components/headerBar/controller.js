headerBar.controller('HeaderBarController',function($scope, $location) {
  debugger;
	if(localStorage.sports_associated_user) {
    $scope.signOutLabel = true;
  }
  else {
    $scope.signOutLabel = false;
  }

  $scope.signOut = function() {
    debugger;
    localStorage.removeItem('sports_associated_user');
    $location.url('sign_in')
    $scope.signOutLabel = false;
  }
})