app.controller('createProjectCtrl', ['$scope', '$rootScope', 'projectsService', function ($scope, $rootScope, projectsService) {
        $scope.addNewProject = function () {
            var project = {
                name: $scope.projectName,
                drawings: [],
                subcontractors: [],
                defects: []
            };
            projectsService.addProject(project, function (projLength) {
                $rootScope.projNr = projLength;
            });
        };
    }]);
	