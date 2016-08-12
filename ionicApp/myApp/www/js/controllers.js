angular.module('starter.controllers', [])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

            // With the new view caching in Ionic, Controllers are only called
            // when they are recreated or on app start, instead of every page change.
            // To listen for when this page is active (for example, to refresh data),
            // listen for the $ionicView.enter event:
            //$scope.$on('$ionicView.enter', function(e) {
            //});

            // Form data for the login modal
            $scope.loginData = {};

            // Create the login modal that we will use later
            $ionicModal.fromTemplateUrl('templates/login.html', {
                scope: $scope
            }).then(function (modal) {
                $scope.modal = modal;
            });

            // Triggered in the login modal to close it
            $scope.closeLogin = function () {
                $scope.modal.hide();
            };

            // Open the login modal
            $scope.login = function () {
                $scope.modal.show();
            };

            // Perform the login action when the user submits the login form
            $scope.doLogin = function () {
                console.log('Doing login', $scope.loginData);

                // Simulate a login delay. Remove this and replace with your login
                // code if using a login system
                $timeout(function () {
                    $scope.closeLogin();
                }, 1000);
            };
        })

        .controller('projectsCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
            $rootScope.currentProject = "";
            $scope.setCurrentProject = function (title) {
                $rootScope.currentProject = title;
                console.log("Title: ", $rootScope.currentProject);
            };
            $scope.projects = [
                {title: 'Project1', id: 1},
                {title: 'Project2', id: 2},
                {title: 'Project3', id: 3},
                {title: 'Project4', id: 4},
                {title: 'Project5', id: 5},
                {title: 'Project6', id: 6},
                {title: 'Project7', id: 7},
                {title: 'Project8', id: 8},
                {title: 'Project9', id: 9},
                {title: 'Project10', id: 10},
                {title: 'Project11', id: 11},
                {title: 'Project12', id: 12},
                {title: 'Project13', id: 13},
                {title: 'Project14', id: 14},
                {title: 'Project15', id: 15},
                {title: 'Project16', id: 16},
                {title: 'Project17', id: 17},
                {title: 'Project18', id: 18}
            ];
        }])

        .controller('projectCtrl', function ($scope, $stateParams) {
            $scope.activeTab = 0;
            $scope.setActiveTab = function(tab) {
                $scope.activeTab = tab;
            };
            $scope.templates = [{
                    name: 'drawings',
                    url: '../templates/drawings.html'
                }, {
                    name: 'subcontractors',
                    url: '../templates/subcontractors.html'
                }, {
                    name: 'defects',
                    url: '../templates/defects.html'
                }, {
                    name: 'punchlist',
                    url: '../templates/punchlist.html'
                }];
        });
