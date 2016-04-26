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
    },
    wonByTeam1: {
      method: 'PUT',
      url: '/matches/:id/won_by/team1',
      params: {
        id: '@id'
      }
    },
    wonByTeam2: {
      method: 'PUT',
      url: '/matches/:id/won_by/team2',
      params: {
        id: '@id'
      }
    }
  })
})