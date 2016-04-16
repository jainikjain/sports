core.factory("participantService",function($resource){
	return $resource("/participants/:id",{id:"@id"},{
		register:{
			method:"POST",
			url:"/participants",
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		},
		forGame:{
			method: 'GET',
			url: '/participants/forGame/:gameId'
		}
	})
})