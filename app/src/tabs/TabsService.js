/**
 * Created by bhowmicp on 3/31/2015.
 */
(function () {
    'use strict';
    angular.module('TabsApp.aux')
        .factory('tab_attributes', function () {
            var x = {};
            var msgCt = 0;
            return {
                tabs: function (key, val) {
                    if (key != undefined) {
                        x[key] = val;
                    }
                    console.log(key);
                    console.log(x);
                    console.log("Message ct = " + msgCt++);
                    return x;
                }
            };
        });
})();