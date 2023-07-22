# Vladimir's Swift Playgrounds

## Changelog
> ### Sat 8 Jul 2023 8:10 PM
> Rename from Swift-Playgrounds to Playgrounds

## Table of Contents

1. <details>
     <summary>
         <a href="https://github.com/VladimirCreator/Playgrounds#delegate">
           Delegate
         </a>
     </summary>

     <h3>
       Quick Look
     </h3>

     <p>
       <img src="./videos/delegate.gif" />
     </p>
   </details>

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
       <a href="https://github.com/VladimirCreator/Playgrounds#reverse-polish-notation">
         Reverse Polish Notation
       </a>
     </summary>

     <h3>
       Quick Look
     </h3>

     <p>
       <img src="./photos/reverse_polish_notation.png" />
     </p>

     <h3>
       Files
     </h3>

     <ol>
       <li>
         <code>
         <a href="./swift/reverse_polish_notation.swift">
           ./swift/reverse_polish_notation.swift
         </a>
         </code>
       </li>
     </ol>
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


1. [Тестовое задание №1](https://github.com/VladimirCreator/Playgrounds/tree/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1#%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1)

## Тестовое задание №1
[Посмотреть](https://application-m78h6t34y-thisusernameisalreadybusy.vercel.app/).

### Dependencies
- TypeScript;
- React;
- Redux Toolkit;
- Tailwind CSS.

Запуск сопровождается POST-запросом к серверу, который возвращает список сообщений, где у каждого сообщения есть уникальный идентификатор, дата публикации, автор, содержимое и список вложений, который включает в себя фотографии и видео.

> Ответственность за этот запрос берёт на себя стандартная функция `useEffect`.

Далее, тот же самый запрос повторяется каждые 5 секунд.

> Ответственность за повторные запросы берёт на себя отдельный `useEffect`.

Есть возможность интерактивного взаимодействия, а именно:

- пометка сообщения как избранного;
> сообщение, которое было помечено как избранное остаётся таким даже после того, как происходит перезагрузка страницы

- в случае, когда сообщение является слишком длинным, появляется кнопка "Далее", которая позволяет отобразить всё сообщение, а на месте нажатой кнопки появляется кнопка "Скрыть" и наооборот.

> длинное сообщением считается сообщение, которое занимает более 3 строк.

- можно выбрать тег "новое" или "эксперт", но они ничего не делают
- загрузка старых сообщений при нажатии кнопки "Загрузить старые сообщения"
- сортировка списка сообщений "от новых к старым" или "от старых к новым"

### Quick Look
![Тестовое задание №1](./videos/тестовое_задание_1.gif)
