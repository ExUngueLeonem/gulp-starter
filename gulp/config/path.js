import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';// продакшн билд
const srcFolder = './src';// исходный код

export const path = {
    build: {// файлы продакшена
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: { //файлы- исходники
        js: `${srcFolder}/js/app.js`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`, // /**/ - проверка в любых вложенных папках
    },
    watch: { //за какими файлаим мы булем наблюдать
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html:`${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',

}