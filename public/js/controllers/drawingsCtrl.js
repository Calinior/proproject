app.controller('drawingsCtrl', ['$scope', '$rootScope', '$uibModal', 'projectsService', 'drawingsService', function ($scope, $rootScope, $uibModal, projectsService, drawingsService) {
        $scope.reverseParam = {
            name: false,
            code: false,
            revisions: false,
            date: false
        };
        $scope.selected = false;
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.drawings = drawingsService.getDrawingsPage($scope.currentPage, $scope.itemsPerPage, $rootScope.projectId);
        $scope.drawingsNr = drawingsService.getDrawingsNr($scope.currentProject.id);
        $scope.pageNumber = $scope.drawingsNr / $scope.itemsPerPage;
        $scope.pageChanged = function () {
            $scope.drawings = drawingsService.getDrawingsPage($scope.currentPage, $scope.itemsPerPage, $rootScope.projectId);
        };
        /* Modal - deleteDrawing, editDrawing, selectDrawing */
        $scope.animationsEnabled = true;
        $scope.open = function (size, value, drawing) {
            if (value === 1) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../views/deleteDrawing.html',
                    scope: $scope,
                    resolve: {
                        drawingID: function () {
                            return drawing.id;
                        }
                    },
                    controller: function ($scope, drawingID) {
                        $scope.deleteDrawing = function () {
                            drawingsService.deleteDrawingById(drawingID);
                            $scope.pageChanged();
                            $scope.closeModal();
                        };
                        $scope.closeModal = function () {
                            modalInstance.dismiss('cancel');
                        };
                    },
                    size: size
                });
            } else if (value === 2) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../views/editDrawing.html',
                    resolve: {
                        drawing: function () {
                            return drawing;
                        }
                    },
                    controller: function ($scope, drawing) {
                        $scope.newDrawing = drawing;
                        $scope.editDrawing = function (newDrawing) {
                            drawingsService.updateDrawing(newDrawing);
                            $scope.closeModal();
                        };
                        $scope.closeModal = function () {
                            modalInstance.dismiss('cancel');
                        };
                    },
                    size: size
                });
            } else {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../views/deleteDrawings.html',
                    scope: $scope,
                    resolve: {
                        drawings: function () {
                            return $scope.drawings;
                        }
                    },
                    controller: function ($scope, drawings) {
                        $scope.deleteDrawings = function () {
                            for (i = 0; i < $scope.itemsPerPage; i++) {
                                if (drawings[i].toBeDeleted) {
                                    drawingsService.deleteDrawingById(drawings[i].id);
                                }
                            }
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
        drawingsService.sortDrawingsByParam('name', $scope.reverseParam['name']);
        $scope.reverseParam['name'] = !$scope.reverseParam['name'];
        $scope.pageChanged();
        $scope.sortBy = function (param) {
            drawingsService.sortDrawingsByParam(param, $scope.reverseParam[param]);
            $scope.reverseParam[param] = !$scope.reverseParam[param];
            $scope.pageChanged();
        };
    }]);