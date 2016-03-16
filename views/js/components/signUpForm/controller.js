signUpForm.controller('SignUpFormController',function($scope,userService) {
  $scope.signUpMsg = '';

  $scope.signUp = function() {
    var name = $scope.name;
    var email = $scope.email;
    var phone = $scope.phone;
    var password = $scope.password;
    var roles = 'ADDEVENT';

    if(name && email && phone && password && roles) {
      $scope.signUpMsg = 'Sending Data...'
      var new_user = new userService();
      new_user.name = name;
      new_user.email = email;
      new_user.phone = phone;
      new_user.password = password;
      new_user.roles = roles;
      new_user.$signUp(function() {
        console.log(new_user);
        $scope.signUpMsg = 'New User Created';
      })
    }
  }
})