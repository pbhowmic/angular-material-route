(function () {
    'use strict';
    var ctrlname = 'FinancialController';
    var url_pattern = '/financial';
    angular.module('TabsApp.financial', ['ngMaterial', 'ngRoute', 'TabsApp.aux'])
        .controller(ctrlname, ['$scope', '$routeParams',
            function ($scope, $routeParams) {
                $scope.name = ctrlname;
                $scope.params = $routeParams;
                $scope.submit_bank_info = function () {
                    //TODO Submit the banking information in a format of your choosing
                    console.log("Submit banking information");
                };
                $scope.submit_credit_card_info = function () {
                    //TODO Submit the credit card information in a format of your choosing
                    console.log("Submit credit card information");
                };
                $scope.card_types = [
                    {description: 'American Express', code: 'amex'},
                    {description: 'Visa', code: 'visa'},
                    {description: 'MasterCard', code: 'mastercard'}
                ]
            }]).config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when(url_pattern, {
                templateUrl: './src/tabs/financial/financial.html',
                controller: ctrlname
            });

        }]).run(['$location', 'tab_attributes', function ($location, tab_attributes) {
            tab_attributes.tabs(ctrlname, {
                name_provider: function () {
                    return 'Financial Account Information';
                },
                url: function () {
                    $location.path(url_pattern);
                    return url_pattern;
                },
                logged_in: function (status) {
                    return status;
                }
            });
        }]);
})();