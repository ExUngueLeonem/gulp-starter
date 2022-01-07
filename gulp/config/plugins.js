import replace from "gulp-replace"; //поиск и замена
import plumber from "gulp-plumber"; //обработка ошибок при работе с файлами
import notify from "gulp-notify"; // Сообщения (подсказки)

// создадим объект с плагинами и будем его экспортировать
export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify
}