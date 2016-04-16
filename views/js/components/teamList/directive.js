teamList.directive('teamList', function() {
	return {
		templateUrl: './js/components/teamList/template.html',
		controller: 'TeamListController',
		scope: {
			selectedTeam: '='
		},
		replace: true
	}
})