angular.module("sports_app",[
  "components",
  "services",
  "pages",
  "ngRoute",
  "ngResource",
  "ui.bootstrap"
  ])
  .config(function($routeProvider){
    $routeProvider
      .when("/",{
        templateUrl:"./js/pages/home/index.html",
        controller:"HomePageController",
        resolve: {
          checkIfSignedIn: function($location) {
            if(!localStorage.sports_associated_user) {
              $location.path('/sign_in');
            }
          }
        }
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
      .when('/create_match', {
        templateUrl: './js/pages/createMatchPage/index.html',
        controller: 'CreateMatchPageController'
      })
      .when('/tournaments/:id', {
        templateUrl: './js/pages/tournaments/index.html',
        controller: 'TournamentsPagesController'
      })
  })