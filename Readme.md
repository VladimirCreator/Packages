# Vladimir's Playgrounds

## GitHub Actions
[![Authentication](https://github.com/VladimirCreator/Playgrounds/actions/workflows/authentication.yml/badge.svg)](https://github.com/VladimirCreator/Playgrounds/actions/workflows/authentication.yml)
[![Message Fetcher](https://github.com/VladimirCreator/Playgrounds/actions/workflows/message-fetcher.yml/badge.svg)](https://github.com/VladimirCreator/Playgrounds/actions/workflows/message-fetcher.yml)

## Changelog
> ### Sat 8 Jul 2023 8:10 PM
> `github`: Rename Swift-Playgrounds to Playgrounds.

## Table of Contents

1. [Booking](#booking)
1. <details>
     <summary>
       <a href="https://github.com/VladimirCreator/Playgrounds#github-explorer">
         GitHub Explorer
       </a>
     </summary>

     <h3>
       Quick Look
     </h3>

     <p>
       <img src="./videos/github_explorer.gif" />
     </p>
   </details>

1. <details>
     <summary>
       <a href="https://github.com/VladimirCreator/Playgrounds#quiz">
         Quiz
       </a>
     </summary>

     <h3>
       Quick Look
     </h3>

     <p>
       <img src="./videos/quiz.gif" />
     </p>
   </details>

1. <details>
     <summary>
       <a href="https://github.com/VladimirCreator/Playgrounds#shade-explorer">
         Shade Explorer
       </a>
     </summary>

     <h3>
       Quick Look
     </h3>

     <p>
       <img src="./videos/shade_explorer.gif" />
     </p>
   </details>

1. <details>
     <summary>
       <a href="https://github.com/VladimirCreator/Playgrounds#%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-0">
         Тестовое задание №0
       </a>
     </summary>

     <p>
       <a href="https://application-0.vercel.app">
         Попробовать
       </a>
     </p>

     <p>
       Запуск сопровождается POST-запросом к серверу, который возвращает список приложений, где у каждого приложения есть идентификатор, название, идентификатор политики, поле <code>agent_js_config</code> и поле <code>correlations_config</code>.
     </p>

     <p>
       Есть возможность интерактивного взаимодействия, а именно:
     </p>

     <ul>
       <li>
         отправка нового приложения на сервер;
       </li>
       <li>
         изменение существующего приложения на сервере.
       </li>
     </ul>

     <h3>
       Quick Look
     </h3>

     <p>
       <img src="./videos/тестовое_задание_0.gif" />
     </p>
   </details>


1. [Message Fetcher](#message-fetcher)
1. [License](#license)

## Booking
![Booking](videos/booking.gif)

## Дипломная работа
[Попробовать](https://graduate-work-gilt.vercel.app/).

### Example
![Дипломная работа](./videos/дипломная_работа.gif)

#### Desktop Landscape
![Desktop Landscape](./photos/дипломная_работа/desktop_landscape.png)

#### iPhone 6 Landscape
![iPhone 6 Landscape](./photos/дипломная_работа/iPhone6_landscape.png)

#### iPhone 6 Portrait
![iPhone 6 Portrait](./photos/дипломная_работа/iPhone6_portrait.png)

#### iPhone X Landscape
![iPhone X Landscape](./photos/дипломная_работа/iPhoneX_landscape.png)

#### iPhone X Portrait
![iPhone X Portrait](./photos/дипломная_работа/iPhoneX_portrait.png)

## Message Fetcher
[Посмотреть](https://application-m78h6t34y-thisusernameisalreadybusy.vercel.app/).

### Dependencies
- TypeScript;
- React;
- Redux Toolkit;
- Tailwind CSS.

Запуск сопровождается POST-запросом к серверу, который возвращает список сообщений, где каждое сообщение включает в себя ① уникальный идентификатор, ② дату публикации, ③ автора, ④ содержимое и ⑤ список вложений[^1].

> Ответственность за этот запрос берёт на себя стандартная функция `useEffect`.

Далее, тот же самый запрос отправляется каждые 5 секунд.

> Ответственность за повторные запросы берёт на себя отдельный `useEffect`.

---

Есть возможность интерактивного взаимодействия, а именно:

- пометка сообщения как избранного;

> сообщение, которое было помечено как избранное остаётся таким даже после того, как происходит перезагрузка страницы

- в случае, когда текстовое содержимое сообщения является слишком длинным, появляется кнопка "Далее", которая позволяет отобразить всё текстовое содержимое, а на месте нажатой кнопки появляется кнопка "Скрыть" и наооборот.

> длинное текстовое содержимое считается длинным, когда занимает более 3-ёх строк.

- можно выбрать тег "новое" или "эксперт", но они ничего не делают
- загрузка старых сообщений при нажатии кнопки "Загрузить старые сообщения"
- сортировка списка сообщений "от новых к старым" или "от старых к новым"

### Quick Look
![Message Fetcher](./videos/message_fetcher.gif)

## License
See [License](LICENSE).

[^1]: Данный список состоит из фотографий и видео.
