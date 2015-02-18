var gulp      = require('gulp');
var transform = require('vinyl-transform');
var pkg       = require('./package.json');

var scripts = {
  lint: ['*.js']
}

gulp.task( 'lint', function(){
  return gulp.src( scripts.lint )
    .pipe( require('gulp-jshint')( pkg.jshint || {} ) )
    .pipe( require('gulp-jshint').reporter('default') );
});

gulp.task( 'watch', function(){
  gulp.watch( scripts.lint, ['lint'] );
});

gulp.task( 'default', [ 'lint', 'watch' ] );