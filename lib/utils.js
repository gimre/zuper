'use strict';

let fs = require( 'fs' );

exports = module.exports = ( ) => {
    return {
        readFile: ( ) => {
            let args = Array.prototype.slice.apply( arguments );
            return new Promise( ( resolve, reject ) => {
                args.push( ( err, data ) => {
                    if ( err ) {
                        reject( err );
                    } else {
                        resolve( data );
                    }
                } );
                fs.readFile.apply( fs, args );
            } );
        }
    };
};

exports[ '@singleton' ] = true;