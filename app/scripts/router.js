/**
 * Created by ZhengLu on 2015/8/24.
 */

'use strict';

// configuring our routes
// =============================================================================
angular.module('formApp').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('form', {
            url: '/form',
            templateUrl: 'views/forms/form.html',
            controller: 'formController',
        })

        // nested states
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.profile', {
            url: '/profile',
            templateUrl: 'views/forms/form-profile.html'
        })

        // url will be /form/interests
        .state('form.interests', {
            url: '/interests',
            templateUrl: 'views/forms/form-interests.html'
        })

        // url will be /form/payment
        .state('form.payment', {
            url: '/payment',
            templateUrl: 'views/forms/form-payment.html'
        });

    // catch all route
    // send users to the form page
    $urlRouterProvider.otherwise('/form/profile');
});