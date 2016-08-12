app.controller('homeCtrl', ['$scope', 'defectsService','projectsService', function ($scope, defectsService, projectsService) {
        $scope.searchBar = function () {
            projectsService.search($scope.searchParam); 
        };
        $scope.activityStream = defectsService.getActivityStream(5);
        console.log("ActivityStream: " + typeof ($scope.activityStream[1].dateAdd));
    }]);