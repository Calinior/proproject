app.controller('subcontractorsCtrl', ['$scope', '$rootScope', '$uibModal', 'projectsService', 'subcontractorsService', function ($scope, $rootScope, $uibModal, projectsService, subcontractorsService) {
        $scope.reverseParam = {
            name: false,
            code: false,
            revisions: false,
            date: false
        };
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.subcontractors = subcontractorsService.getSubcontractorsPage($scope.currentPage, $scope.itemsPerPage, $rootScope.projectId);
        $scope.subcontractorsNr = subcontractorsService.getSubcontractorsNr();
        $scope.pageNumber = $scope.subcontractorsNr / $scope.itemsPerPage;
        $scope.pageChanged = function () {
            $scope.subcontractors = subcontractorsService.getSubcontractorsPage($scope.currentPage, $scope.itemsPerPage, $rootScope.projectId);
        };
        $scope.deleteSubcontractor = function (id) {
            subcontractorsService.deleteSubcontractorById(id);
            $scope.pageChanged();
        };
        /* Modal - deleteSubcontractor */
        $scope.animationsEnabled = true;
        $scope.open = function (size, value, id) {
            if (value === 1) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../views/deleteSubcontractor.html',
                    scope: $scope,
                    resolve: {
                        subcontractorID: function () {
                            return id;
                        }
                    },
                    controller: function ($scope, subcontractorID) {
                        $scope.deleteSubcontractor = function () {
                            subcontractorsService.deleteSubcontractorById(subcontractorID);
                            $scope.pageChanged();
                            $scope.closeModal();
                        };
                        $scope.closeModal = function () {
                            modalInstance.dismiss('cancel');
                        };
                    },
                    size: size
                });
            }
        };
        subcontractorsService.sortSubcontractorsByParam('name', $scope.reverseParam['name']);
        $scope.reverseParam['name'] = !$scope.reverseParam['name'];
        $scope.pageChanged();
        $scope.sortBy = function (param) {
            subcontractorsService.sortSubcontractorsByParam(param, $scope.reverseParam[param]);
            $scope.reverseParam[param] = !$scope.reverseParam[param];
            $scope.pageChanged();
        };
    }]);