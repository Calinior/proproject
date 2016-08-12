app.directive('punch', function () {
    return{
        restrict: 'E',
        scope: {
            punchInfo: '=punchData'
        },
        templateUrl: 'views/taskTpl.html',
        controller: function ($scope) {
        }
    }
});

/*
 * <punch punchData='task' ></punch>
 */