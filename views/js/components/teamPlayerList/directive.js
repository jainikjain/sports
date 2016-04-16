teamPlayerList.directive('teamPlayerList', function() {
	return {
		templateUrl: './js/components/teamPlayerList/template.html',
		controller: 'TeamPlayerListController',
		scope: {
			players: '='
		},
		replace: true
	}
})