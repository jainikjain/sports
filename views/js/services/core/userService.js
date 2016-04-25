core.factory('userService',function($resource) {
  return $resource('/users',{},{
    signUp:{
      method:'POST',
      url:'/users'
    },
    signIn:{
      method:'POST',
      url:'/users/signin'
    }
  })
})