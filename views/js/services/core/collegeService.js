core.factory("collegeService",function($resource){
	return $resource("http://localhost:3000/colleges/:id",{id:"@id"});
})