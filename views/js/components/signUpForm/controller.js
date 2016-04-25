signUpForm.controller('SignUpFormController',function($scope,userService) {
  $scope.signUpMsg = '';
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var phoneRegex = /\d{10}/;
  $scope.signUp = function() {
    var name = $scope.name;
    var email = $scope.email;
    var phone = $scope.phone;
    var password = $scope.password;
    var role = $scope.role;

    if(name && email && phone && password && role) {
      if(!emailRegex.test(email)) {
        $scope.signUpMsg = 'Enter a valid E-mail'
      }
      else if (!phoneRegex.test(phone)) {
        $scope.signUpMsg = 'Enter a valid phone number'
      }
      else if (password.length < 6){
        $scope.signUpMsg = 'Password should be of minimum 6 characters';
      }
      else {
        $scope.signUpMsg = 'Sending Data...'
        var new_user = new userService();
        new_user.name = name;
        new_user.email = email;

        new_user.phone = phone;
        new_user.password = password;
        new_user.role = role;

        new_user.$signUp(function() {
          console.log(new_user);
          $scope.signUpMsg = 'New User Created';
        })        
      }

    }
    else {
      $scope.signUpStatus = 'Please fill all the fields to sign up';
    }
  }
})