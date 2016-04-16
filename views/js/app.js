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
      .when('/create_game', {
        templateUrl: './js/pages/createGame/index.html',
        controller: 'CreateGamePageController'
      })
      .when('/create_team', {
        templateUrl: './js/pages/createTeam/index.html',
        controller: 'CreateTeamPageController'
      })
      .when('/select_players/:team_id', {
        templateUrl: './js/pages/selectPlayers/index.html',
        controller: 'SelectPlayersPageController'
      })
      .when('/view_teams', {
        templateUrl: './js/pages/viewTeam/index.html',
        controller: 'ViewTeamPageController'
      })
      .when('/create_tournament', {
        templateUrl: './js/pages/createTournamentPage/index.html',
        controller: 'CreateTournamentPageController'
      })
  })