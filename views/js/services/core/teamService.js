core.factory('teamService', function($resource) {
	return $resource('/teams/:id',{id: '@id'},{
		create: {
			method: 'POST',
			url: '/teams'
		},
		addPlayer: {
			method: 'PUT',
			url: '/teams/:id/add_player/:player_id',
			params: {
				player_id: '@player_id'
			}
		}
	})
})