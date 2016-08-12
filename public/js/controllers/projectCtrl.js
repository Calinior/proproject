app.controller('projectCtrl', ['$scope', '$state', '$rootScope', '$location', '$stateParams', 'projectsService', 'drawingsService',
    function ($scope, $state, $rootScope, $location, $stateParams, projectsService) {
        $rootScope.projectId = parseInt($stateParams.id);
        $scope.status = ["Review", "In progress", "Done"];
        $scope.priority = ['High', 'Low', 'Medium'];
        $scope.severity = ['Moderate'];
        $scope.dueDate = ['Moderate'];
        $scope.assignee = ['Companyname@mail.com'];
        $scope.itemsNumber = [{
                value: 10
            }, {
                value: 20
            }, {
                value: 35
            }, {
                value: 50
            }];
        $scope.url = $location.url();
        $scope.activeTab = 0;
        $scope.bcLabel = $scope.url.split('/')[3];
        $scope.currentProject = projectsService.getProjectById($rootScope.projectId);
        $scope.getActiveTab = function (label) {
            $scope.bcLabel = label;
            if (!label)
                label = $scope.url.split('/')[3];
            var act = 0;
            switch (label) {
                case "subcontractors":
                    act = 1;
                    break;
                case "defects":
                    act = 2;
                    break;
                case "punchlist":
                    act = 3;
                    break;
                case "drawings":
                default:
                    break;
            }
            $scope.activeTab = act;
        };
        $scope.setActiveTab = function (tab) {
            $scope.getActiveTab(tab.ref);
//            $state.go('project.' + tab.ref);
        };
        $scope.tabs = [{
                tabIndex: 0,
                ref: 'drawings',
                heading: 'Drawings',
                template: 'views/drawings.html'

            }, {
                tabIndex: 1,
                ref: 'subcontractors',
                heading: 'Subcontractors',
                template: 'views/subcontractors.html'
            }, {
                tabIndex: 2,
                ref: 'defects',
                heading: 'Defects',
                template: 'views/defects.html'
            }, {
                tabIndex: 3,
                ref: 'punchlist',
                heading: 'Punch List',
                template: 'views/punchlist.html'
            }];
        $scope.getActiveTab($scope.url.split('/')[3]);
}]);