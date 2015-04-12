/**
 * Created by Partho Bhowmick on 3/31/2015.
 */
(function () {
    'use strict';
    var ctrlname = 'LoginController';
    var url_pattern = '/login';
    angular.module('TabsApp.login', ['ngMaterial', 'ngRoute', 'TabsApp.aux'])
        .controller(ctrlname, ['$scope', '$routeParams',
            function ($scope, $routeParams) {
                $scope.name = ctrlname;
                $scope.params = $routeParams;
                $scope.logindata = {username: '', password: ''};
                $scope.submit_auth = function (valid) {
                    if (valid) {
                        $http.post('/user/login', $scope.logindata).success(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            $rootScope.oauth = data;
                        }).error(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                        })
                    }
                }
            }]).config(function ($routeProvider) {
            $routeProvider.when(url_pattern, {
                templateUrl: './src/tabs/login/login.html',
                controller: ctrlname
            }).otherwise({
                templateUrl: './src/tabs/login/login.html'
            });
        }).run(['$location', 'tab_attributes', function ($location, tab_attributes) {
            tab_attributes.tabs(ctrlname, {
                _state: '',
                name_provider: function () {
                    return (this._state == 'logged_in') ? 'Sign out' : 'Sign in/Sign up';
                },
                url: function () {
                    $location.path(url_pattern);
                    return url_pattern;
                }
            });
        }]);
})();