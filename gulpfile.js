// Основной модулль
import gulp from 'gulp';
// Импорт путей
import { path } from './gulp/config/path.js';

//Передаем значения в глобальный объект
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from './gulp/tasks/copy.js';

// Наблюдатель за изменениями в файловой системе watch.path
function watcher() {
    gulp.watch( path.watch.files, copy );
}

// Построение сценариев выполнения задач
const dev = gulp.series(copy, watcher);

// уыВыполенение сценария по умолчанию (здесь запускаются сценарии)
gulp.task('default', dev);