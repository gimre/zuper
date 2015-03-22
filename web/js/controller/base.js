'use strict';

angular.module( 'zuper' ).controller( 'base', [
    '$scope',
    'apiService',
    function ( $scope, apiService ) {
        $scope.itemTypes = apiService.itemTypes.query( );
    }
] );