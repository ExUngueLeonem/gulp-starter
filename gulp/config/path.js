import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';// продакшн билд
const srcFolder = './src';// исходный код

export const path = {
    build: {
        html: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`, // /**/ - проверка в любых вложенных папках
    },
    watch: {
        html:`${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: '',

}