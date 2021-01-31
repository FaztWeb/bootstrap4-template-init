const { series, parallel, src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// Ejecuta la funcion compileSass() de antemano, inicia el LiveServer y monitorea cambios en los .html, el archivo bootstrap.scss y los .scss de la carpeta src/scss/
function serve() {
  compileSass();
  browserSync.init({
    server: './src'
  });

  watch([
    'node_modules/bootstrap/scss/bootstrap.min.scss',
    'src/scss/*.scss'
  ], compileSass);

  watch('src/*.html').on('change', browserSync.reload);
}

// Compila los archivos .scss añadidos a css comprimido y lo guarda en src/css/
function compileSass(){
  return src([
    'node_modules/bootstrap/scss/bootstrap.scss',
    'src/scss/*.scss'
  ])
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(dest('src/css'))
  .pipe(browserSync.stream());
}

// Mueve los arhivos .js de las dependencias a la carpeta src/js/
function js(){
  return src([
    'node_modules/bootstrap/dist/js/bootstrap.min.js',
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/popper.js/dist/umd/popper.min.js'
  ])
  .pipe(dest('src/js'))
  .pipe(browserSync.stream());
}

// Mueve los webfonts de Font Awesome a la carpeta src/webfonts/
function FAFonts(){
  return src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
    .pipe(dest('src/webfonts'));
}

// Ejecuta FAFonts() y mueve los css de Font Awesome a src/css/
function fontAwesome(){
  FAFonts();
  return src('node_modules/@fortawesome/fontawesome-free/css/all.min.css')
  .pipe(dest('src/css'));
}

exports.default = series(parallel(fontAwesome, js), serve);