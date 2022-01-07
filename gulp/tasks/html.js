import fileInclude from "gulp-file-include"; 
import webpHtmlNosvg from "gulp-webp-html-nosvg";

export const html = () => {
    return app.gulp.src(app.path.src.html) //путь к нашему главному html
        .pipe(fileInclude())    //модуль, который склеивает наши куски html    
        .pipe(app.plugins.replace(/@img\//g, 'img/')) // заменям @img/ в прошакшн html файле на img/
        .pipe(webpHtmlNosvg())
        .pipe(app.gulp.dest(app.path.build.html))//куда мы копируем файлы
}