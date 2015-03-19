'use strict';

exports = module.exports = ( utils ) => {
    return function *( ) {
        this.type = 'text/html';
        this.body = yield utils.readFile( 'cms/index.html' )
    };
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [ 'lib/utils' ];