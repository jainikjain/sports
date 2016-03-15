core.factory("participantService",function($resource){
	return $resource("http://localhost:3000/participants/:id",{id:"@id"},{
		register:{
			method:"POST",
			url:"http://localhost:3000/participants",
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
		}
	})
})