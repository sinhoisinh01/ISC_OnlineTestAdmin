var app = angular.module('onlineTestAdmin', ['ngRoute']);
app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "views/index.html"
		})
		.when("/user", {
			templateUrl: "views/user/usermanager.html",
			controller: "UserController"
		})
		.when("/user/add", {
			templateUrl: "views/user/adduser.html",
			controller: "UserController"
		})
		.when("/user/edit", {
			templateUrl: "views/user/edituser.html",
			controller: "UserController"
		})
		/*.when("/calendar", {
			templateUrl: "views/calendar.html"
		})
		.when("/stats", {
			templateUrl: "views/stats.html"
		})
		.when("/tables", {
			templateUrl: "views/tables.html"
		})
		.when("/buttons", {
			templateUrl: "views/buttons.html"
		})
		.when("/editors", {
			templateUrl: "views/editors.html"
		})
		.when("/forms", {
			templateUrl: "views/forms.html"
		})*/
		;
	})
;