// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);

                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                    .state('app', {
                        url: '/app',
                        abstract: true,
                        templateUrl: 'templates/menu.html',
                        controller: 'AppCtrl'
                    })
                    .state('app.myAccount', {
                        url: '/myAccount',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/myAccount.html'
                            }
                        }
                    })
                    .state('app.about', {
                        url: '/about',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/about.html'
                            }
                        }
                    })
                    .state('app.projects', {
                        url: '/projects',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/projects.html',
                                controller: 'projectsCtrl'
                            }
                        }
                    })
                    .state('app.project', {
                        url: '/project/:projectId',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/project.html',
                                controller: 'projectCtrl'
                            }
                        }
                    })
                    .state('app.createProject', {
                        url: '/createProject',
                        views: {
                            'menuContent': {
                                templateUrl: 'templates/createProject.html',
                                controller: 'projectsCtrl'
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/projects');
        });