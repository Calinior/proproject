app.controller('defectsCtrl', ['$scope', '$rootScope', '$uibModal', 'projectsService', 'defectsService', '$breadcrumb', function ($scope, $rootScope, $uibModal, projectsService, defectsService, $breadcrumb) {
        $('tbody').perfectScrollbar();
        $scope.reverseParam = {
            taskName: false,
            asignee: false
        };
        $scope.sortBy = function (propertyName) {
            $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
            $scope.propertyName = propertyName;
        };
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        $scope.defects = defectsService.getDefectsPage($scope.currentPage, $scope.itemsPerPage, $rootScope.projectId);
        $scope.defectsNr = defectsService.getDefectsNr();
        $scope.pageNumber = $scope.defectsNr / $scope.itemsPerPage;
        $scope.pageChanged = function () {
            $scope.defects = defectsService.getDefectsPage($scope.currentPage, $scope.itemsPerPage, $rootScope.projectId);
        };
        /* Status class */
        $scope.statusClass = function (d) {
            if (d.status === $scope.status[0]) {
                return "purple";
            }
            if (d.status === $scope.status[1]) {
                return "orange";
            }
            return "green";
        };
        /* Change the status of a defect */
        $scope.changeValue = function (defect, val) {
            defect.status = val;
            defectsService.changeDefectStatus(defect.id, val);
            $rootScope.renderPunchLists();
        };
        /* Preview task */
        $scope.showAddTask = false;
        $scope.disabled = true;
        $scope.showButton = false;
        $scope.setAddTask = function (value, task) {
            if (value) {
                $scope.selectedValue = {
                    priority: task.priority,
                    severity: task.severity,
                    dueDate: task.dueDate,
                    asignee: task.asignee,
                    status: task.status
                };
                $scope.newTask = {
                    taskName: task.taskName
                };
            }
            $scope.showAddTask = value;
        };
        defectsService.sortDefectsByParam('taskName', $scope.reverseParam['taskName']);
        $scope.reverseParam['taskName'] = !$scope.reverseParam['taskName'];
        $scope.pageChanged();
        $scope.sortBy = function (param) {
            defectsService.sortDefectsByParam(param, $scope.reverseParam[param]);
            $scope.reverseParam[param] = !$scope.reverseParam[param];
            $scope.pageChanged();
        };
        $scope.$watch('itemsPerPage', function (newVal, oldVal) {
            setTimeout(function () {
                $('.defactsTable').perfectScrollbar();
            }, 0);
        });
    }]);