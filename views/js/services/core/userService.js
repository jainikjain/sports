core.factory('userService',function($resource) {
	return $resource('http://localhost:3000/users',{},{
		signUp:{
			method:'POST',
			url:'http://localhost:3000/users'
		},
		signIn:{
			method:'POST',
			url:'http://localhost:3000/users/signin'
		}
	})
})