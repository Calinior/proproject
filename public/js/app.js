var app = angular.module('myApp', [
	'ui.router',
	'ui.bootstrap',
	'ngAnimate',
	'ncy-angular-breadcrumb',
	'ngDragDrop'
]);
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$breadcrumbProvider',
	function ($stateProvider, $urlRouterProvider, $locationProvider, $breadcrumbProvider) {
		$locationProvider.html5Mode(false);
		$urlRouterProvider.otherwise('/home');
		$stateProvider
			.state('home', {
				url: '/home',
				templateUrl: '../views/home.html',
				controller: 'homeCtrl',
			})
			.state('about', {
				url: '/about',
				templateUrl: '../views/about.html',
				controller: 'aboutCtrl',
			})
			.state('search', {
				url: '/search',
				templateUrl: '../views/search.html',
				controller: 'searchCtrl'
			})
			.state('createProject', {
				url: '/createProject',
				templateUrl: '../views/createProject.html',
				controller: 'createProjectCtrl'
			})
			.state('project', {
				url: '/project/:id',
				templateUrl: '../views/project.tpl.html',
				controller: 'projectCtrl',
			})
			.state('project.subcontractors', {
				url: '/subcontractors',
				templateUrl: function (param) {
					return '../views/subcontractors.html'
				},
			})
			.state('project.drawings', {
				url: '/drawings',
				templateUrl: function (param) {
					return '../views/drawings.html'
				},
			})
			.state('project.punchlist', {
				url: '/punchlist',
				templateUrl: function (param) {
					return '../views/punchlist.html'
				},
			})
			.state('project.defects', {
				url: '/defects',
				templateUrl: function (param) {
					return '../views/defects.html'
				},
			});
	}]);
app.filter('capitalize', function () {
	return function (input) {
		return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
	}
});


