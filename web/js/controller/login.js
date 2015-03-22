'use strict';

angular.module( 'zuper' ).controller( 'login', [
    '$scope',
    '$location',
    'apiService',
    function ( $scope, $location, apiService ) {
        $scope.model = {
            user: '',
            pass: '',
            error: false
        };

        var goToDashboard = function ( ) {
            $location.path( '/home' );
        };

        var badLogin = function ( ) {
            $scope.error = true;
        };

        $scope.tryLogin = function ( ) {
            apiService
                .auth( $scope.model.user, $scope.model.pass )
                .success( goToDashboard )
                .error( badLogin );

            $scope.model.user = '';
            $scope.model.pass = '';
        };
    }
] );