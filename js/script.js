/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
    },
    adv = document.querySelectorAll('.promo__adv img'),
    bg = document.querySelector('.promo__bg'),
    genre = bg.querySelector('.promo__genre'),
    filmsWatched = document.querySelectorAll('.promo__interactive-item'),
    movieList = document.querySelector('.promo__interactive-list');

movieDB.movies.sort();

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
adv.forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'ДРАММА';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg".
//    Оно лежит в папке img. Реализовать только при помощи JS
bg.style.backgroundImage = 'url("img/bg.jpg")';
// bg.style.background = 'url(../img/bg.jpg) center center/cover no-repeat';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла. Отсортировать их по алфавиту
// 5) Добавить нумерацию выведенных фильмов

movieList.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${(i+1)}. ${film}
            <div class="delete"></div>
        </li>
    `;
});

// filmsWatched.forEach((item, i) => {
//     item.textContent = `${(i+1)}. ${movieDB.movies[i]}`;
//     item.innerHTML += '<div class="delete"></div>';
// });