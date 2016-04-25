core.factory('gameService', function($resource) {
	return $resource('/games',{}, {
		create: {
			method:'POST',
			url: '/games'
		}
	})
})