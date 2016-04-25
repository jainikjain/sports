matchView.directive('matchView', function() {
  return {
    templateUrl: './js/components/matchView/template.html',
    controller: 'MatchViewController',
    replace: true,
    scope: {
      match: '='
    }
  }
})