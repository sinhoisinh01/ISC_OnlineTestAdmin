var app = angular.module('Authentication', ['ngRoute','ngCookies']);
app.config(function($locationProvider,$routeProvider,$httpProvider,$qProvider) {
		$qProvider.errorOnUnhandledRejections(false);
		
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
