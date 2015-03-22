var gulp   = require( 'gulp' ),
    gulpif = require( 'gulp-if' ),
    inline = require( 'gulp-inline' ),
    uglify = require( 'gulp-uglify' );

var inlineConfig = {
    base: 'web/'
};

gulp.task( 'default', function ( ) {
    return gulp.src( 'web/*.html' )
        .pipe( inline( inlineConfig ) )
        .pipe( gulp.dest( 'cms/' ) );
} );