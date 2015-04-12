(function () {
    'use strict';
    var ctrlname = 'FinancialController';
    var url_pattern = '/financial';
    angular.module('TabsApp.financial', ['ngMaterial', 'ngRoute', 'TabsApp.aux'])
        .controller(ctrlname, ['$scope', '$routeParams',
            function ($scope, $routeParams) {
                $scope.name = ctrlname;
                $scope.params = $routeParams;
                $scope.bank_add_acct_data = {};
                $scope.submit_bank_info = function (valid) {
                    if (valid) {
                        $http.post('/account/bank/', $scope.bank_add_acct_data)
                            .success(function (data, status, headers, config) {
                                // this callback will be called asynchronously
                                // when the response is available
                            }).error(function (data, status, headers, config) {
                                // this callback will be called asynchronously
                                // when the response is available
                            });
                    }
                };
                $scope.fetch_bank_account = function () {
                    $http.get('/account/bank/1').
                        success(function (data, status, headers, config) {
                            // this callback will be called asynchronously
                            // when the response is available
                            console.log(data);
                            $scope.bank_add_acct_data = data;
                        }).
                        error(function (data, status, headers, config) {
                            // called asynchronously if an error occurs
                            // or server returns response with an error status.
                            $scope.bank_add_acct_data = $scope.bank_add_acct_data || {};
                        });//TODO: Complete, just a placeholder
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
                    return 'Bank Account Information';
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