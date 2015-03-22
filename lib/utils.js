'use strict';

let fs = require( 'fs' );

exports = module.exports = ( ) => {
    let promisify = ( func, self ) => {
        return ( ) => {
            self = self || this;
            
            let args = Array.prototype.slice.call( arguments );
            return new Promise( ( resolve, reject ) => {
                args.push( ( err, data ) => {
                    if ( err ) {
                        reject( err );
                    } else {
                        resolve( data );
                    }
                } );
                func.apply( self, args );
            } );
        }
    };

    return {
        privateKey: fs.readFileSync( '.pkey' ),
        publicKey: fs.readFileSync( '.pub' ),
        promisify: promisify,
        readFile: promisify( fs.readFile, fs )
    };
};

exports[ '@singleton' ] = true;