/**
 * Created by ZhengLu on 2015/8/24.
 */

'use strict';

angular.module('formApp').directive('appNav', function(NavData) {
    return {
        restrict: 'EA',
        scope: {},
        templateUrl: 'views/home/nav.html',
        link: function(scope, element, attrs) {
            template: '<div ng-transclude="test"></div>'
        }
    }
})