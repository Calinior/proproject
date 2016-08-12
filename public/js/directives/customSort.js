app.$inject = ['$scope', '$filter'];
app.directive("customSort", function () {
    return {
        restrict: 'A',
        transclude: true,
        scope: {
            order: '=',
            sort: '='
        },
        template:
                ' <a ng-click="sort_by(order)" style="color: #555555;">' +
                '    <span ng-transclude></span>' +
                '    <i ng-class="selectedCls(order)"></i>' +
                '</a>',
        link: function (scope) {
            scope.sort_by = function (newSortingOrder) {
                var sort = scope.sort;
                if (sort.sortingOrder == newSortingOrder) {
                    sort.reverse = !sort.reverse;
                }
                sort.sortingOrder = newSortingOrder;
            };
            scope.selectedCls = function (column) {
                var iconSort = 'icon-sort';

                if (column == scope.sort.sortingOrder) {
                    iconSort = ('icon-chevron-' + ((scope.sort.reverse) ? 'down' : 'up'));
                }
                return iconSort;
            };
        }
    }
});

