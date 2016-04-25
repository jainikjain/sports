signInForm.controller('SignInFormController',function($scope,$location,userService) {
  $scope.signInMsg = '';

  $scope.signIn = function() {
    var email = $scope.email;
    var password = $scope.password;

    $scope.signInMsg = 'Sending Data...'

    if(email && password) {

      var user = new userService();
      user.email = email;
      user.password = password;
      user.$signIn(function(response) {
        if(user.body.InvalidLogin) {
          $scope.signInMsg = 'Invalid User name and password';
        }
        else {
          $scope.signInMsg = '';
          localStorage.setItem('sports_associated_user',response.body.associatedUser)
          $location.url('/');
        }
      }) 
    }
    else {
      $scope.signInMsg = 'Enter a valid email and password to log In'
    }
  }
})