app.controller('punchlistCtrl', ['$scope', '$uibModal', '$rootScope', 'projectsService', 'defectsService', function ($scope, $uibModal, $rootScope, projectsService, defectsService) {
        $('punch').perfectScrollbar();
        /* Show add new task form */
        $scope.showAddTask = false;
        $scope.disabled = false;
        $scope.showButton = true;
        $scope.setAddTask = function (value) {
            if (value) {
                $scope.newTask = {};
                $scope.selectedValue = {
                    priority: 'Priority',
                    severity: 'Severity',
                    dueDate: 'Due date',
                    asignee: 'Asignee',
                    status: 'Status'
                };
            }
            $scope.showAddTask = value;
        };
        /* Add new task */
        $scope.addNewTask = function (newTask) {
            newTask.projectID = $scope.currentProject.id;
            defectsService.addDefect(newTask);
            $scope.setAddTask(false);
        };
        /* Update task */
        $scope.updateNewTask = function (colName, value) {
            $scope.newTask[colName] = value;
            $scope.selectedValue[colName] = value;
        };
        $scope.punchLists = defectsService.getDefectsContent();
        $rootScope.renderPunchLists = function () {
            $scope.punchLists = defectsService.getDefectsContent();
        }
    }]);