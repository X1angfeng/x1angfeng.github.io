var del = require('del');
var fs = require('fs');
var gulp = require('gulp');
var path = require('path');
var stylint = require('gulp-stylint');
var eslint = require('gulp-eslint');
var yaml = require('js-yaml');


gulp.task('lib:clean',function(){
  return del([ './source/lib/*', '!./source/lib/first-party/**' ]);
})

gulp.task('lib:fontAwesome',function(){
  return gulp.src([
    'node_modules/@fortawesome/fontawesome-free/webfonts/*',
    'node_modules/@fortawesome/fontawesome-free/css/all.min.css'
  ], {base: 'node_modules/@fortawesome/fontawesome-free'})
    .pipe(gulp.dest('./source/lib/font-awesome'))
})

gulp.task('lib:justifiedGallery',function(){
  return gulp.src([
    'node_modules/justifiedGallery/dist/css/*.min.css',
    'node_modules/justifiedGallery/dist/js/*.min.js'
  ], {base: 'node_modules/justifiedGallery/dist'})
    .pipe(gulp.dest('./source/lib/justified-gallery'))
})

gulp.task('lib:jQuery',function(){
  return gulp.src(['node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('./source/lib/jquery'))
})

gulp.task('lib:lightbox2', function() {
  return gulp.src([
    'node_modules/lightbox2/dist/js/lightbox.min.js',
    'node_modules/lightbox2/dist/css/lightbox.min.css',
    'node_modules/lightbox2/dist/images/*',
], {base: 'node_modules/lightbox2/dist'})
    .pipe(gulp.dest('./source/lib/lightbox2'))
});

gulp.task('lib:clipboard', function() {
  return gulp.src(['node_modules/clipboard/dist/clipboard.min.js'])
  .pipe(gulp.dest('./source/lib/clipboard'))
});

gulp.task('lib:share-js', function() {
  return gulp.src(['node_modules/share-js/dist/**/*.*'])
  .pipe(gulp.dest('./source/lib/share-js'))
});

gulp.task('lib:valine', function() {
  return gulp.src(['node_modules/valine/dist/Valine.min.js'])
  .pipe(gulp.dest('./source/lib/valine'))
});

gulp.task('lib:video-js', function() {
  return gulp.src([
    'node_modules/video.js/dist/*.min.*',
    'node_modules/video.js/dist/font/**',
    'node_modules/video.js/dist/lang/zh-CN.*'
  ], {base: 'node_modules/video.js/dist/'})
  .pipe(gulp.dest('./source/lib/video.js'))
});

gulp.task('lint:js', function() {
  return gulp
    .src(["./source/js/**/*.js", "./scripts/**.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('lint:stylus', function () {
  return gulp.src([
    './source/css/*.styl',
    './source/css/_partial/*.styl',
    './source/css/_colors/*.styl'
  ]).pipe(stylint({ config: '.stylintrc' }))
    .pipe(stylint.reporter())
    .pipe(stylint.reporter('fail', { failOnWarning: true }));
});

gulp.task('validate:config', function(cb) {
  var themeConfig = fs.readFileSync(path.join(__dirname, '_config.yml'));

  try {
    yaml.safeLoad(themeConfig);
    cb();
  } catch(error) {
    cb(new Error(error));
  }
});

gulp.task('validate:languages', function(cb) {
  var languagesPath = path.join(__dirname, 'languages');
  var languages = fs.readdirSync(languagesPath);
  var errors = [];
  for (var i in languages) {
    var languagePath = path.join(languagesPath, languages[i]);
    try {
      yaml.safeLoad(fs.readFileSync(languagePath), {
        filename: path.relative(__dirname, languagePath)
      });
    } catch(error) {
      errors.push(error);
    }
  }
  if (errors.length == 0) {
    cb();
  } else {
    cb(errors);
  }
});

gulp.task('lib', gulp.series('lib:clean', 'lib:clipboard', 'lib:jQuery', 'lib:fontAwesome', 'lib:justifiedGallery', 'lib:lightbox2', 'lib:share-js', 'lib:valine', 'lib:video-js'));
gulp.task('lint', gulp.parallel('lint:js', 'lint:stylus'));
gulp.task('validate', gulp.parallel('validate:config', 'validate:languages'));
gulp.task('default', gulp.parallel('lint', 'validate'));
