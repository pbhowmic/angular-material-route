/**
 * Created by bhowmicp on 3/31/2015.
 */
(function () {
    'use strict';

    angular.module('TabsApp')
        .filter('logged_in_status', function () {
            return function (tabs_list, status) {
                status = status || false;
                var hst = [];
                var keys = Object.keys(tabs_list);
                for (var i = 0; i < keys.length; i++) {
                    console.log(tabs_list[keys[i]]);
                    if (tabs_list[keys[i]].logged_in(status))
                        hst.push(tabs_list[keys[i]]);
                }
                return hst;
            }
        })
        .controller('TabsController', ['$scope', '$route', '$routeParams', '$location', 'tab_attributes',
            function ($scope, $route, $routeParams, $location, tab_attributes) {
                $scope.route = $route;
                $scope.routeParams = $routeParams;
                $scope.location = $location;
                $scope.toggleList = function () {
                    //TODO
                };
                $scope.tab_list = tab_attributes.tabs();
                $scope.logged_in_status2 = function () {
                    return tab_attributes.login_status()
                };

            }]);
})();