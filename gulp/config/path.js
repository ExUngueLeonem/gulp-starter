import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';// продакшн билд
const srcFolder = './src';// исходный код

export const path = {
    build: {// файлы продакшена
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: { //файды- исходники
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`, // /**/ - проверка в любых вложенных папках
    },
    watch: { //за какими файлаим мы булем наблюдать
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