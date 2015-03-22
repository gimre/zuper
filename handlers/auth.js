'use strict';

let jwt = require( 'koa-jwt' );

exports = module.exports = ( db, utils ) => {
    return function *( ) {
        let p = this.request.body,
            user = p.user,
            pass = p.pass;

        let found = yield db.users.findOneAsync( { } );
        if( !found ) {
            this.status = 404;
            this.body = { auth: null }
        } else {
            this.body = { auth: jwt.sign( found, utils.pkey ) };
        }
    };
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [ 'lib/database', 'lib/utils' ];