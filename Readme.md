# Vladimir’s Packages

[![GitHub Pages](https://github.com/VladimirCreator/gists/actions/workflows/github-pages.yaml/badge.svg?event=workflow_dispatch)](https://github.com/VladimirCreator/gists/actions/workflows/github-pages.yaml)

## Description
A collection of packages where I practice git, JavaScript, TypeScript, Swift, GitHub and even more!

## Overview

|№|Package|![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)|![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)|![](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)|
|:-:|:-|:-:|:-:|:-:|
|1|[\_R\__ for a Comment](#_r__-for-a-comment)|✔️| | |
|2|[\_R\__ for a Hotel](#_r__-for-a-hotel)| | |✔️|
|3|[CRUD for a X](#crud-for-a-x)|✔️| | |
|4|[CRU_ for an Application](#cru_-for-an-application)|✔️| | |
|5|[Exam for December 2022](#exam-for-december-2022)|✔️| | |
|6|[Just a Card](#just-a-card)| |✔️| |
|7|[Just a Form](#just-a-form)| |✔️| |
|8|[Shade Explorer](#shade-explorer)|✔️| | |
|9|[X](#x)| |✔️| |

## \_R\__ for a Comment

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/_r__-for-a-comment/).

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/_r__-for-a-comment.gif)

### Dependencies
This package includes at least these dependencies:

- Vite
- TypeScript
- React
- Redux Toolkit
- Tailwind CSS

### Description
Запуск сопровождается POST-запросом к серверу, который возвращает список сообщений, где каждое сообщение включает в себя ① уникальный идентификатор, ② дату публикации, ③ автора, ④ содержимое и ⑤ список вложений[^1].

Далее, тот же самый запрос отправляется каждые 5 секунд.

Пакет предусматривает возможности интерактивного взаимодействия, а именно:

- пометка сообщения как избранного

> [!NOTE]
> Сообщение, которое было помечено как избранное остаётся таким даже после того, как произошла перезагрузка страницы.

- в случае, когда текстовое содержимое сообщения является слишком длинным , появляется кнопка "Далее", которая позволяет отобразить всё текстовое содержимое, а на месте нажатой кнопки появляется кнопка "Скрыть" и наооборот

> [!NOTE]
> Длинное текстовое содержимое считается длинным, когда занимает более 3-ёх строк.

- можно выбрать тег "новое" или "эксперт", но это не влияет на что-либо
- загрузка старых сообщений при нажатии кнопки "Загрузить старые сообщения"
- сортировка списка сообщений "от новых к старым" или "от старых к новым"

## \_R\__ for a Hotel

### Quick Look

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/_r__-for-a-hotel.mov)

## CRUD for a X

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/crud-for-a-x/).

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/crud-for-a-x.gif)

#### Desktop Landscape

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/windows:landscape.png)

#### iPhone 6 Landscape

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhone6:landscape.png)

#### iPhone 6 Portrait

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhone6:portrait.png)

#### iPhone X Landscape

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhoneX:landscape.png)

#### iPhone X Portrait

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhoneX:portrait.png)

## CRU_ for an Application

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/cru_-for-an-application/).

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/cru_-for-an-application.gif)

### Description

Запуск сопровождается POST-запросом к серверу, который возвращает список приложений, где у каждого приложения есть ① идентификатор, ② название, ③ идентификатор политики, ④ поле `agent_js_config` и ⑤ поле `correlations_config`.

Пакет предусматривает возможность интерактивного взаимодействия, а именно:

- отправка нового приложения на сервер
- изменение существующего приложения на сервере

## Exam for December 2022

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/exam-for-december-2022/).

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/exam-for-december-2022.gif)

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/exam-for-december-2022/:initial.png)

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/exam-for-december-2022/:success.png)

![](./ZGitHubAndYouShouldIgnoreThisDirectory/png/exam-for-december-2022/:fail.png)

### Getting Started

```bash
$ export TITLE_FOR_EXAM_FOR_2022="<YOUR TITLE>"
```

## Just a Card
[Take a look](https://vladimircreator.github.io/Packages/just-a-card/).

## Just a Form
[Give it a shot](https://vladimircreator.github.io/Packages/just-a-form/).

## Shade Explorer

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/shade-explorer/).

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/shade-explorer.gif)

## X

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/x/).

![](./ZGitHubAndYouShouldIgnoreThisDirectory/gif/x.gif)

## Changelog

### Sat 8 Jul 2023 8:10 PM
Rename this repository from Swift-Playgrounds to Playgrounds.

### Sun 5 Nov 2023 9:27 PM
Rename this repository from Playgrounds to gists.

### Sun 10 Nov 2023 8:03 AM
Rename this repository from gists to Packages.

## License
See [License](LICENSE).

[^1]: Данный список состоит из фотографий и видео.
