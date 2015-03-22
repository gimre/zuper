'use strict';

let DataStore = require( 'nedb' );

let promisify = 


DataStore.prototype.findAsync = ( ) => {
    let args = Array.prototype.slice.call( arguments ),
        self = this;
    return new Promise( ( resolve, reject ) => {
        args.push( ( err, data ) => {
            if ( err ) {
                reject( err );
            } else {
                resolve( data );
            }
        } );
        self.find.apply( self, args );
    } );
    
};

exports = module.exports = ( utils ) => {
    let methods = [ 'findAsync', 'findOne' ];
    methods.forEach( m => DataStore.prototype[ m + 'Async' ] = utils.promisify( DataStore.prototype[ m ] ) );

    return {
        itemTypes: new DataStore( { filename: 'database/itemTypes.db', autoload: true } ),
        users: new DataStore( { filename: 'database/users.db', autoload: true } )
    };
};

exports[ '@singleton' ] = true;
exports[ '@require' ] = [ 'lib/utils' ];