import fileInclude from "gulp-file-include"; 

export const html = () => {
    return app.gulp.src(app.path.src.html) //путь к нашему главному html
        .pipe(fileInclude())    //модуль, который склеивает наши куски html    
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        .pipe(app.gulp.dest(app.path.build.html))//куда мы копируем файлы
}