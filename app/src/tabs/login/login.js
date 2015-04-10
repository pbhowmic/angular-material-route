/**
 * Created by bhowmicp on 3/31/2015.
 */
(function () {
    'use strict';
    var ctrlname = 'LoginController';
    var url_pattern = '/login';
    angular.module('TabsApp.login', ['ngMaterial', 'ngRoute', 'TabsApp.aux'])
        .value('login_status', false)
        .controller(ctrlname, ['$scope', '$routeParams', 'tab_attributes', 'login_status',
            function ($scope, $routeParams, tab_attributes, login_status) {
                $scope.name = ctrlname;
                $scope.params = $routeParams;
                $scope.username = '';
                $scope.passwd = '';
                $scope.submit_auth = function () {
                    //TODO Submit the auth in a format of your choosing.
                    // I make no assumptions as to what the authentication backend is or what type of authentication is
                    // to be used w.e. session-based auth or Token auth or what have you. This is just a stub.
                    console.log("Submit_auth");
                    tab_attributes.login_status($scope.username == 'partho' && $scope.passwd == 'parthos');
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
                    return (tab_attributes.login_status()[0]) ? 'Sign out' : 'Sign in/Sign up';
                },
                url: function () {
                    $location.path(url_pattern);
                    return url_pattern;
                },
                logged_in: function (status) {
                    return true;
                }
            });
        }]);
})();