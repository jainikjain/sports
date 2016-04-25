core.factory("participantService",function($resource){
	return $resource("/participants/:id",{id:"@id"},{
		register:{
			method:"POST",
			url:"/participants"
		},
		forGame:{
			method: 'GET',
			url: '/participants/forGame/:gameId'
		}
	})
})