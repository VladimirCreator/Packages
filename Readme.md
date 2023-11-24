# Vladimir’s Packages

[![GitHub Pages](https://github.com/VladimirCreator/Packages/actions/workflows/github-pages.yaml/badge.svg?event=workflow_dispatch)](https://github.com/VladimirCreator/Packages/actions/workflows/github-pages.yaml)

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

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/_r__-for-a-comment.gif)

### Dependencies
This package includes at least these dependencies:

- Vite
- TypeScript
- React
- Redux Toolkit
- Tailwind CSS

### Description
Запуск сопровождается POST-запросом к серверу, который возвращает список сообщений, где каждое сообщение включает в себя ① уникальный идентификатор, ② дату публикации, ③ автора, ④ содержимое и ⑤ список вложений[^1].

[^1]: Данный список состоит из фотографий и видео.

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

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/_r__-for-a-hotel.mov)

### Dependencies
This package includes at least these dependencies:

- SwiftUI

### Description
Данный пакет включает в себя 4 экрана:

1. Экран со списком отелей
1. Экран со списком номеров в отеле
1. Экран с процессом бронирования
1. Экран с подтверждённой оплатой

#### Экран со списком отелей
Появление данного экрана сопровождается GET-запросом к серверу, который возвращает список отелей, где каждый отель включает в себя информацию о своём ① идентификаторе, ② названии, ③ адресе, ④ цене, ⑤ информации о том, что включает в себя эта цена, ⑥ рейтинге, ⑦ описании рейтинга, ⑧ изображениями отеля, ⑨ описанием об отеле и ⑩ что включено. Изображения отеля можно листать.

Далее, предоставляется возможность выбора определённого отеля с осуществлением перехода на [экран со списком номеров](#экран-со-списком-номеров-в-отеле) в нём.

#### Экран со списком номеров в отеле
Появление данного экрана сопровождается GET-запросом к серверу, который возвращает список номеров в выбранном отеле, где каждый номер содержит ① идентификатор, ② название, ③ цену, ④ что включает в себя цена, ⑤ что включает номер и ⑥ изображения. Изображения номера можно листать.

Далее, предоставляется возможность выбора определённого номера в отеле с осуществлением перехода на [экран с процессом бронирования](#экран-с-процессом-бронирования).

#### Экран с процессом бронирования
Появление данного экрана сопровождается GET-запросом к серверу, который возвращает информацию, которая необходима для процесса принятия решения о бронировании желаемого номера. Эта информация включает в себя ① название отеля, ② адрес отеля, ③ рейтинг отеля, ④ описание рейтинга, ⑤ страну вылета, ⑥ страну прилёта, ⑦ дату начала тура, ⑧ дату конца тура, ⑨ количество ночей, ⑩ описание номера, ⑪ описание питания, ⑫ цену за тур, ⑬ топливный сбор и ⑭ сервисный сбор.

Здесь происходит процесс заполнения информации о покупателе и туристах:

- Требуемая информация о покупателе включает в себя ① номер телефона и ② почту.
- Требуемая информация о туристе включает в себя ① имя, ② фамилию, ③ дату рождения, ④ гражданство, ⑤ номер заграничного паспорта и ⑥ его срок действия.

> [!NOTE]
> Стоит отметить, что нет ограничения на количество туристов и здесь есть возможность добавлять такое количество туристов, которое небходимо.

После всех этих утомительных процедур происходит процесс оплаты нажатием кнопки “Оплатить” и осуществляется переход на [экран с подтверждённой оплатой](#экран-с-подтверждённой-оплатой).

> [!NOTE]
> Никакой оплаты на самом деле не происходит.

#### Экран с подтверждённой оплатой
Здорово! Это последний экран этого пакета.

Единственное, что здесь можно сделать нажать кнопку “Супер!”, чтобы вернуться на [экран со списком отелей](#экран-со-списком-отелей).

> [!NOTE]
> Я считаю, что я реализовал это интересным способом, а именно способом передачи состояния через окружение.

## CRUD for a X

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/crud-for-a-x/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/crud-for-a-x.gif)

#### Desktop Landscape

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/windows-landscape.png)

#### iPhone 6 Landscape

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhone6-landscape.png)

#### iPhone 6 Portrait

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhone6-portrait.png)

#### iPhone X Landscape

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhoneX-landscape.png)

#### iPhone X Portrait

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/crud-for-a-x/iPhoneX-portrait.png)

### Dependencies

- Vite

### Description


## CRU_ for an Application

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/cru_-for-an-application/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/cru_-for-an-application.gif)

### Description

Запуск сопровождается POST-запросом к серверу, который возвращает список приложений, где у каждого приложения есть ① идентификатор, ② название, ③ идентификатор политики, ④ поле `agent_js_config` и ⑤ поле `correlations_config`.

Пакет предусматривает возможность интерактивного взаимодействия, а именно:

- отправка нового приложения на сервер
- изменение существующего приложения на сервере

## Exam for December 2022

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/exam-for-december-2022/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/exam-for-december-2022.gif)

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/exam-for-december-2022/-initial.png)

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/exam-for-december-2022/-success.png)

![](./zGitHubAndYouShouldIgnoreThisDirectory/png/exam-for-december-2022/-fail.png)

### Getting Started

```bash
$ export TITLE_FOR_EXAM_FOR_2022="<YOUR TITLE>"
```

## Just a Card
[Take a look](https://vladimircreator.github.io/Packages/just-a-card/).

### Dependencies
- Vite
- TypeScript

### Description


## Just a Form
[Give it a shot](https://vladimircreator.github.io/Packages/just-a-form/).

### Dependencies
- Vite
- React

### Description

## Shade Explorer

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/shade-explorer/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/shade-explorer.gif)

## X

### Quick Look
[Give it a shot](https://vladimircreator.github.io/Packages/x/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/gif/x.gif)

### Dependencies
- Vite
- TypeScript
- React
- Redux Toolkit
- Taildwind CSS

## Changelog

### Sat 8 Jul 2023 8:10 PM
Rename this repository from Swift-Playgrounds to Playgrounds.

### Sun 5 Nov 2023 9:27 PM
Rename this repository from Playgrounds to gists.

### Sun 10 Nov 2023 8:03 AM
Rename this repository from gists to Packages.

## License
See [License](LICENSE).
