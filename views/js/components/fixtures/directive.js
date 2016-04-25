fixtures.directive('fixtures', function() {
  return {
    templateUrl: './js/components/fixtures/template.html',
    controller: 'FixturesController',
    replace: true,
    scope: {
      tournamentName: '=',
      teams: '='
    }
  }
})