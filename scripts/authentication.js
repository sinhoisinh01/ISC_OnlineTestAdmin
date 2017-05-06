var app = angular.module('Authentication', ['ngRoute','ngCookies','ngAlertify']);
app.config(function($locationProvider,$routeProvider,$httpProvider,$qProvider) {
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
