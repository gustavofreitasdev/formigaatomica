/* Importando plugins para facilitar o desenvolvimento */
var gulp = require('gulp');
var pug = require('gulp-pug');

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
    // Move a API Cytoscape para a a área de deploy
    gulp.src('./node_modules/cytoscape/dist/cytoscape.min.js')
        .pipe(gulp.dest('./dist/js'));
});


/* ==== Tarefas Gerais ==== */
/* Tarefa padrão, quando apenas se digita 'gulp' no terminal */
gulp.task('default', ['dist-js', 'pug']);
/* Tarefa que verifica e toma ações caso houver alguma mudança */
gulp.task('watch', ['pug-watch']);