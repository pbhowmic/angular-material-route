/**
 * Created by bhowmicp on 3/31/2015.
 */
(function () {
    'use strict';

    angular.module('TabsApp')
        .controller('TabsController', ['$scope', '$route', '$routeParams', '$location', 'tab_attributes',
            function ($scope, $route, $routeParams, $location, tab_attributes) {
                $scope.route = $route;
                $scope.routeParams = $routeParams;
                $scope.location = $location;
                $scope.toggleList = function () {
                    //TODO
                };
                $scope.tab_list = tab_attributes.tabs();
                $scope.load_controller = function(tab) {

                }
            }]);
})();