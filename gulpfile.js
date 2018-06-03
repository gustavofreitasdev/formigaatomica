/* Importando plugins para facilitar o desenvolvimento */
var gulp = require('gulp'); // core do gulp
var pug = require('gulp-pug'); // plugin para trabalhar com arquivos PUG
var uglify = require('gulp-uglify'); // plugin para mimificação de arquivos JS
var rename = require('gulp-rename'); // plugin para trabalhar com nomes de arquivos
var clean = require('gulp-clean'); // plugin para trabalhar com exclusão de arquivos e diretórios
var uglifycss = require('gulp-uglifycss'); // plugin para mimificação de arquivos CSS
var concat = require('gulp-concat'); // plugin para concatenar arquivos

/* Tarefa para compilar os arquivos PUG para HTML */
gulp.task('pug', function(){
    gulp.src('./dev/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist'));
});
/* Tarefa que verifica e compila se houve alguma modificações nos arquivos PUG */
gulp.task('pug-watch', function(){
    gulp.watch('dev/pug/*', ['pug']);
});

/* Tarefa para compilar ou mover todas as dependências JS nescessárias */
gulp.task('dist-js', function(){
    // Move a API Cytoscape para a área de deploy
    gulp.src('./node_modules/cytoscape/dist/cytoscape.min.js')
        .pipe(gulp.dest('./dist/js'));
    // Move, mimifica e renomeia os arquivos JS de desenvolvimento para a área de deploy 
    gulp.src('./dev/js/*.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js'}))
        .pipe(gulp.dest('./dist/js'));
});
/* Tarefa que verifica e compila se houve alguma modificações nos arquivos JS */
gulp.task('js-watch', function(){
    gulp.watch('./dev/js/*', ['dist-js']);
});

/* Tarefa que mimifica e move arquivos CSS para o deploy */ 
gulp.task('dist-css', function(){
    gulp.src('./dev/css/*.css')
        .pipe(concat('style.css'))
        .pipe(uglifycss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./dist/css'));
});
/* Tarefa que verifica e toma uma ação caso houver alguma mudança nos arquivos CSS */
gulp.task('css-watch', function(){
    gulp.watch('./dev/css/*', ['dist-css']);
});


/* ==== Tarefas Gerais ==== */
/* Tarefa padrão, quando apenas se digita 'gulp' no terminal */
gulp.task('default', ['dist-js', 'pug', 'dist-css']);
/* Tarefa que verifica e toma ações caso houver alguma mudança */
gulp.task('watch', ['js-watch', 'pug-watch', 'css-watch']);
/* Tarefa para excluir pasta de deploy */
gulp.task('clean', function(){
    gulp.src('./dist')
        .pipe(clean());
});
/* Tarefa para excluir pasta de deploy e depêndencias do NPM */
gulp.task('full-clean', function(){
    gulp.src(['./dist', './node_modules'])
        .pipe(clean());
});