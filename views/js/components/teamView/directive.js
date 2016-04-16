teamView.directive('teamView', function() {
	return {
		teamplateUrl: './js/components/teamView/teamplate.html',
		controller: 'TeamViewController',
		replace: true
	}
})