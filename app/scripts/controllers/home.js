/**
 * Created by ZhengLu on 2015/8/24.
 */

'use strict';

// our controller for the form
// =============================================================================
angular.module('formApp').controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
});