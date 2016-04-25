core.factory('tournamentService', function($resource) {
	return $resource('/tournaments/:id', {id: '@id'}, {
		create: {
			method: 'POST',
			url: '/tournaments'
		},
    byCreator: {
      method: 'GET',
      url: '/tournaments/by/:id',
      params: {
        id: '@id'
      }
    }
	})
})