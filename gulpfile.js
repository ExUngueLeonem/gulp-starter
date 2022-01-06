// Основной модулль
import gulp from 'gulp';
// Импорт путей
import {path} from './gulp/config/path.js';

//Передаем значения в глобальный объект
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from './gulp/tasks/copy.js';

// Выполенение сценария по умолчанию
gulp.task('default', copy);