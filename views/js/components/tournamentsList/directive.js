tournaments.directive('tournamentsList', function() {
  return {
    templateUrl: './js/components/tournamentsList/template.html',
    controller: 'TournamentsListController',
    replace: true,
    scope: {
      tournaments: '='
    }
  }
})