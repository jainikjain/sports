registerComponent.controller("RegisterController",function($scope,participantService,collegeService){
	$scope.colleges=collegeService.get();
	console.log($scope.colleges);
	$scope.register=function(){
		var participant=new participantService();
		participant.name=$scope.name;
		participant.phone=$scope.phone;
		participant.college=$scope.collegeSelect;
		participant.gender=$scope.genderSelect;
		participant.course=$scope.course;
		participant.year=$scope.yearSelect;
		participant.email=$scope.email;

		participant.$save(function(){
			console.log(participant);
			alert(participant.body.participantId);
		})
	}
})