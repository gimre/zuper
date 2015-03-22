'use strict';

angular.module( 'zuper' ).service( 'apiService', [
    '$resource',
    function ( $http, $resource ) {
        var base = '/api';
        return {
            auth: $
            itemTypes: $resource( base + '/itemTypes' )
        };
    }
] );