'use strict';

var app = angular.module( 'zuper', [
    'ngResource',
    'ngRoute'
] );

app.config( [
    '$routeProvider',
    function ( $routeProvider ) {
        $routeProvider
            .when( '/login', {
                templateUrl: 'login.html',
                controller: 'login'
            } );
    }
] );