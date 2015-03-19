'use strict';

let api   = require( 'koa' )( ),
    ioc   = require( 'electrolyte' ),
    route = require( 'koa-route' );

ioc.loader( ioc.node( './' ) );

api.use( route.get( '/', ioc.create( 'handlers/index' ) ) );

api.listen( 80 );