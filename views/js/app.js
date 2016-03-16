angular.module("sports_app",[
  "components",
  "services",
  "pages",
  "ngRoute",
  "ngResource"
  ])
  .config(function($routeProvider){
    $routeProvider
      .when("/",{
        templateUrl:"./js/pages/register/index.html",
        controller:"RegisterPageController"
      })
      .when('/sign_up',{
        templateUrl:'./js/pages/signUp/index.html',
        controller:'SignUpPageController'
      })
      .when('/sign_in',{
        templateUrl: './js/pages/signIn/index.html',
        controller: 'SignInPageController'
      })
  })