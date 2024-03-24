Кінопошук

Напиши застосунок із маршрутизацією для пошуку фільмів за назвою. Подивіться демо-відео роботи застосунку.
https://goitlmsstorage.b-cdn.net/4c6fffa5-7f06-4a1d-9f2b-ed0b4a616b28react-hw-04-preview.mp4

Сервіс пошуку фільмів

В цьому завданні, за допомогою HTTP-запитів, ти будеш отримувати фільми з сервісу TMDB (https://www.themoviedb.org/). Зареєструй аккаунт (можна ввести довільні дані), щоб отримати доступ до документації (https://developer.themoviedb.org/docs/getting-started) та ключ доступу для HTTP-запитів.

Корисні для тебе розділи документації:

Trending movies - список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.

- Search movie - https://developer.themoviedb.org/reference/trending-movies - пошук фільму за ключовим словом на сторінці фільмів.
- Movie details - https://developer.themoviedb.org/reference/search-movie - запит повної інформації про фільм для сторінки кінофільму.
- Movie credits - https://developer.themoviedb.org/reference/movie-details - запит інформації про акторський склад для сторінки кінофільму.
- Movie reviews - https://developer.themoviedb.org/reference/movie-credits - запит оглядів для сторінки кінофільму.

Токен доступу

Токен доступу повинен долучатися до кожного запиту у вигляді HTTP-заголовка Authorization, ось приклад.

===============================================================
const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
headers: {
// Замість api_read_access_token вставте свій токен
Authorization: 'Bearer api_read_access_token'
}
};

axios.get(url, options)
.then(response => console.log(response))
.catch(err => console.error(err));
===============================================================

Токен доступу отримується з розділу "API Read Access Token" на сторінці API (https://www.themoviedb.org/settings/api).

Шлях до зображень

Бекенд буде надсилати замість повноцінного посилання на зображення, наприклад для плаката фільму, отакі рядки, тобто просто ім'я файлу.

===============================================================
/1E5baAaEse26fej7uHcjOgEE2t2.jpg
===============================================================

Для складання повного шляху до зображення тобі необхідно ознайомитися з розділом документації (https://developer.themoviedb.org/docs/image-basics), присвяченим цьому питанню.

Якщо коротко, то необхідно вручну додати шлях перед ім'ям зображення. В результаті у тебе вийде повноцінне посилання на зображення.
https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

Навігація в додатку

У застосунку обов'язково повинні бути наступні маршрути.

- '/' - компонент HomePage, домашня сторінка із списком популярних кінофільмів.
- '/movies' - компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
- '/movies/:movieId' - компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
- /movies/:movieId/cast - компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
- /movies/:movieId/reviews - компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
- Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.

Файли, папки та компоненти:

- Файли компонентів сторінок, таких як HomePage, MoviesPage, MovieDetailsPage, NotFoundPage, повинні бути в папці src/pages.
- Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components.
- Меню з навігаційними посиланнями перенесіть в компонент Navigation. Він складається з двох компонентів NavLink, які вказують на маршрути / і /movies.
- Для відображення списку фільмів створіть компонент MovieList. Використовуйте його на сторінках HomePage і MoviesPage.

Поділ коду

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy та Suspense.
