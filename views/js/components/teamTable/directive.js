teamTable.directive('teamTable', function() {
  return {
    templateUrl: './js/components/teamTable/template.html',
    controller: 'TeamTableController',
    replace: true,
    scope: {
      teams: '='
    }
  }
})