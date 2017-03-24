var app = angular.module('onlineTestAdmin', ['ngRoute']);
app.config(function($routeProvider) {
		$routeProvider
		.when("/", {
			templateUrl: "views/index.html"
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