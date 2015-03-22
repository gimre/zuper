'use strict';

let api      = require( 'koa' )( ),
    ioc      = require( 'electrolyte' ),
    koa_body = require( 'koa-body' ),
    jwt      = require( 'koa-jwt' ),
    route    = require( 'koa-route' );

ioc.loader( ioc.node( './' ) );

api.use( koa_body( ) );

// public
api.use( route.post( '/api/auth', ioc.create( 'handlers/auth' ) ) );
api.use( route.get( '/', ioc.create( 'handlers/index' ) ) );

api.use( jwt( { secret: ioc.create( 'lib/utils' ).publicKey } ) );

// authorized
api.use( route.get( '/api/itemTypes', ioc.create( 'handlers/itemTypes/get' ) ) );

api.listen( 80 );