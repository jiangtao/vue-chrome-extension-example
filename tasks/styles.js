import gulp from 'gulp';
import gulpif from 'gulp-if';
import gutil from 'gulp-util';
import path from 'path';
import sourcemaps from 'gulp-sourcemaps';
import less from 'gulp-less';
import cleanCSS from 'gulp-clean-css';
import livereload from 'gulp-livereload';
import args from './lib/args';

gulp.task('styles:css', function() {
  return gulp.src('app/styles/*.css')
    .pipe(gulpif(args.sourcemaps, sourcemaps.init()))
    .pipe(gulpif(args.production, cleanCSS()))
    .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(`dist/${args.vendor}/styles`))
    .pipe(gulpif(args.watch, livereload()));
});

gulp.task('styles:less', function() {
  return gulp.src('app/styles/*.less')
    .pipe(gulpif(args.sourcemaps, sourcemaps.init()))
    .pipe(less({ paths: [
      './app',
      path.resolve(process.cwd(), 'node_modules')
    ]}).on('error', function(error) {
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      this.emit('end');
    }))
    .pipe(gulpif(args.production, cleanCSS()))
    .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(`dist/${args.vendor}/styles`))
    .pipe(gulpif(args.watch, livereload()));
});


gulp.task('styles', [
  'styles:css',
  'styles:less'
]);

