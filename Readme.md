# Vladimir's Swift Playgrounds

## Changelog
> ### Sat 8 Jul 2023 8:10 PM\
> Rename from Swift-Playgrounds to Playgrounds

## Table of Contents
1. [Delegate](https://github.com/VladimirCreator/Playgrounds#delegate)
1. [GitHub Explorer](https://github.com/VladimirCreator/Playgrounds#github-explorer)
1. [Quiz](https://github.com/VladimirCreator/Playgrounds#quiz)
1. [Reverse Polish Notation](https://github.com/VladimirCreator/Playgrounds#reverse-polish-notation)
1. [Shade Explorer](https://github.com/VladimirCreator/Playgrounds#shade-explorer)
1. [Тестовое задание №0](https://github.com/VladimirCreator/Playgrounds#%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-0)
1. [Тестовое задание №1](https://github.com/VladimirCreator/Playgrounds/tree/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1#%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-1)

## Delegate
`nil`

### Files
`nil`

### Example
![Delegate](./videos/delegate.gif)

## GitHub Explorer
A tool for viewing repositories on GitHub.

### Files
`nil`

### Example
![GitHub Explorer](./videos/github_explorer.gif)

## Quiz
`nil`

### Files
`nil`

### Quick Look
![Quiz](./videos/quiz.gif)

## Reverse Polish Notation
A tool for solving expressions.

### Files
1. [`./swift/reverse_polish_notation.swift`](./swift/reverse_polish_notation.swift)

### Example
![Reverse Polish Notation](./photos/reverse_polish_notation.png)

## Shade Explorer
A game.

### Files
`nil`

### Example
![Shade Explorer](./videos/shade_explorer.gif)

## Тестовое задание №0
Описание.

### Files
1. [`./html_css_js/тестовое_задание_0/index.html`](./html_css_js/тестовое_задание_0/index.html)

### Quick Look
![Тестовое задание №0](./videos/тестовое_задание_0.gif)

## Тестовое задание №1
[Посмотреть](https://application-m78h6t34y-thisusernameisalreadybusy.vercel.app/).

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
