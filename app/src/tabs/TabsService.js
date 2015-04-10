/**
 * Created by bhowmicp on 3/31/2015.
 */
(function () {
    'use strict';
    angular.module('TabsApp.aux')
        .factory('tab_attributes', function () {
            var x = {};
            var _login_status=[false];

            return {
                tabs: function (key, val) {
                    if (key != undefined) {
                        x[key] = val;
                    }
                   return x;
                },
                login_status: function (status) {
                    if (status == undefined) {
                        return _login_status;
                    } else {
                        _login_status[0] = status;
                        return _login_status;
                    }
                }
            };
        });
})();