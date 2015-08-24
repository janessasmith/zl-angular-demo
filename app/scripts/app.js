'use strict';

// create our angular app and inject ngAnimate and ui-router
// =============================================================================
angular.module('formApp', [
    'ngAnimate',
    'ui.router'
])

// configuring our routes
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {

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


        // route to show our basic form (/form)
        /*.state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'views/forms/form.html'
                },
                'formProfile@index': {
                    templateUrl: 'views/forms/form-profile.html'
                },
                'formInterests@index': {
                    templateUrl: 'views/forms/form-interests.html'
                },
                'formPayment@index': {
                    templateUrl: 'views/forms/form-payment.html'
                }
            }
         })*/
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope) {

    // we will store all of our form data in this object
    $scope.formData = {};

    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');
    };
});
