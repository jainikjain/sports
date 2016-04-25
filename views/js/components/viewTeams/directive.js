viewTeams.directive('viewTeams', function() {
  return {
    templateUrl: './js/components/viewTeams/template.html',
    controller: 'ViewTeamsController',
    replace: true,
    scope: {
      teams: '='
    }
  }
})