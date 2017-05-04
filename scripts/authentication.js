var app = angular.module('Authentication', ['ngRoute','ngCookies']);
app.config(function($locationProvider,$routeProvider,$httpProvider,$qProvider) {
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
		$qProvider.errorOnUnhandledRejections(false);


		$routeProvider
		.when("/", {
			controller: "LoginController"
		});
  });
app.run(function($rootScope,Oauth2Factory,$location){

	$rootScope.$on('$routeChangeStart', function (event, next) {
        //LoginFactory.login();
        if (Oauth2Factory.isLogined()) {
						event.preventDefault();
						window.location.href= "./";
        }

    });
});
