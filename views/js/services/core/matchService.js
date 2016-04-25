core.factory('matchService', function($resource) {
  return $resource('/matches/:id', {id: '@id'}, {
    create: {
      method: 'POST',
      url: '/matches'
    },
    inTournament: {
      method: 'GET',
      url: '/matches/in/:tournament_id',
      params: {
        tournament_id: '@tournament_id'
      }
    }
  })
})