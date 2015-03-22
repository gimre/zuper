'use strict';

exports = module.exports = ( db, utils ) => {
    return function *( ) {
        this.body = yield db.itemTypes.findAsync( { } );
    };
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [ 'lib/database', 'lib/utils' ];