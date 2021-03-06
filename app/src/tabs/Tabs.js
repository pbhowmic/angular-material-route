/**
 * Created by bhowmicp on 3/30/2015.
 */
(function () {
    'use strict';
    angular.module('TabsApp.aux', []);
    // Prepare the 'users' module for subsequent registration of controllers and delegates
    angular.module('TabsApp', ['ngMaterial', 'ngRoute', 'TabsApp.aux', 'TabsApp.login', 'TabsApp.financial'])
        .config(function ($mdThemingProvider, $mdIconProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('green')
                .accentPalette('teal');
            $mdIconProvider.icon('menu', './assets/svg/menu.svg');

        }).run(['$rootScope', '$injector', function ($rootScope, $injector) {
            $injector.get("$http").defaults.transformRequest = function (data, headersGetter) {
                if ($rootScope.oauth) headersGetter()['Authorization'] = "Token " + $rootScope.oauth.token;
                if (data) {
                    return angular.toJson(data);
                }
            };
        }]);
})();
