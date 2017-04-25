var app = angular.module('Authentication', ['ngRoute','ngCookies']);
app.config(function($locationProvider,$routeProvider) {
		//$locationProvider.html5Mode(true);
		/*
			Convention:
			- get all( plural) / E.g: questions
			- get by id / E.g: question/get/:id
			- add / E.g: question/add
			- edit / E.g: question/edit
			- delete / E.g: question/delete
			...
		*/
		$routeProvider
		.when("/", {
			controller: "LoginController"
		});
  });
app.run(function($rootScope,LoginFactory,$location){

	$rootScope.$on('$routeChangeStart', function (event, next) {
        //LoginFactory.login();
        if (LoginFactory.isLogined()) {
						event.preventDefault();
						window.location.href= "./";
        }

    });
});
