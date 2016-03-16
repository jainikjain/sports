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
      user.$signIn(function() {

        if(user.body.InvalidLogin) {
          $scope.signInMsg = 'Invalid User name and password';
        }
        else {

          $scope.signInMsg = '';
          $location.url('/');
        }
      }) 
    }
  }
})