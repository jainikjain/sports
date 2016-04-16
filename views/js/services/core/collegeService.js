core.factory("collegeService",function($resource){
	return $resource("/colleges/:id",{id:"@id"});
})