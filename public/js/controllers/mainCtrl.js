app.controller('mainCtrl', ['$scope', '$rootScope', '$uibModal', 'projectsService', '$state', function ($scope, $rootScope, $uibModal, projectsService, $state) {
        $scope.currentUser = {
            userName: 'John Doe',
            fullName: 'John Doe',
            email: 'companyname@companyname.com',
            phone: '+40757345678',
            address: 'str.Republique, no.4, Paris, 345678',
            country: 'France',
            zipCode: '23456',
            indSector: 'Naval; Construction; Transportation',
            regNo: '234T67-34R',
            img: 'images/image.jpg'
        };
        $rootScope.projNr = projectsService.getProjectsNr();
        $scope.columns = {
            drawings: ['Name', 'Code', 'Revisions', 'Date', 'Tasks'],
            subcontractors: ['Name', 'User name', 'Company', 'Email', 'Phone number', 'Tasks'],
            defects: ['Task name', 'Priority', 'Severity', 'Due date', 'Asignee', 'Related tasks', 'Status']
        };
        $scope.projects = projectsService.getProjects();
        $scope.getProjectName = function (projectID) {
            for (var i = 0; i < $scope.projects.length; i++) {
                if ($scope.projects[i].id === projectID) {
                    return $scope.projects[i].name;
                }
            }
        };
        $scope.stateChange = function (id) {
            $state.go("project", {"id": id});
        };
        $scope.showCreateNewBtn = false;
        $scope.setScrollBar = function () {
            $('.ul-create').perfectScrollbar();
            $scope.showCreateNewBtn = !$scope.showCreateNewBtn;
        };
        /* Modal - loggedIn, loggedOff */
        $scope.loggedIn = true;
        $scope.animationsEnabled = true;
        $scope.open = function (size) {
            if ($scope.loggedIn) {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../../views/loggedOff.html',
                    controller: function ($scope) {
                        $scope.closeModal = function () {
                            modalInstance.dismiss('cancel');
                        };
                    },
                    size: size
                });
            } else {
                var modalInstance = $uibModal.open({
                    animation: $scope.animationsEnabled,
                    templateUrl: '../../views/loggedIn.html',
                    controller: function ($scope) {
                        $scope.closeModal = function () {
                            modalInstance.dismiss('cancel');
                        };
                    },
                    size: size
                });
            }
            $scope.loggedIn = !$scope.loggedIn;
        };
    }]);
$('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas').toggleClass('active');
    $('.collapse').toggleClass('in').toggleClass('hidden-xs').toggleClass('visible-xs');
});

