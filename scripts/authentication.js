var app = angular.module('Authentication', ['ngRoute','ngCookies']);
app.config(function($locationProvider,$routeProvider) {
		//$locationProvider.html5Mode(true);
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
