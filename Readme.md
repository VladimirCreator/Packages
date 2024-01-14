Vladimir’s Packages
===================

[![GitHub Pages](https://github.com/VladimirCreator/Packages/actions/workflows/github-pages.yaml/badge.svg?event=workflow_dispatch)](https://github.com/VladimirCreator/Packages/actions/workflows/github-pages.yaml)

## Description
A collection of packages where I practice git, JavaScript, TypeScript, Swift, GitHub and even more!

### Topics
<span>swift</span>
<span>typescript</span>
<span>javascript</span>

## Overview

|№|Package|![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)|![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)|![](https://img.shields.io/badge/Swift-FA7343?style=for-the-badge&logo=swift&logoColor=white)|![](https://img.shields.io/badge/purescript-14161a?style=for-the-badge&logo=purescript&logoColor=white)|
|:-:|:-|:-:|:-:|:-:|:-:|
|1|[\_R\__ for a Comment](#_r__-for-a-comment)|✔️| | | |
|2|[\_R\__ for a Hotel](#_r__-for-a-hotel)| | |✔️| |
|3|[CRUD for a X](#crud-for-a-x)|✔️| | | |
|4|[CRU_ for an Application](#cru_-for-an-application)|✔️| | | |
|5|[CV](#cv2)| |✔️| | |
|6|[Exam for December 2022](#exam-for-december-2022)|✔️| | | |
|7|[Just a Card](#just-a-card)| |✔️| | |
|8|[Just a Form](#just-a-form)|✔️| | | |
|9|[Shade Explorer](#shade-explorer)| |✔️| | |
|10|[X](#x)| |✔️| | |

## \_R\__ for a Comment

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/_r__-for-a-comment/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/_r__-for-a-comment/_r__-for-a-comment.gif)

### Dependencies
This package includes at least these dependencies:

- Vite
- TypeScript
- React
- Redux
- Tailwind CSS

### Getting Started

### Description
Запуск сопровождается POST-запросом к серверу, который возвращает список сообщений, где каждое сообщение включает в себя ① уникальный идентификатор, ② дату публикации, ③ автора, ④ содержимое и ⑤ список вложений[^1].

[^1]: Данный список состоит из фотографий и видео.

Далее, тот же самый запрос отправляется каждые 5 секунд.

Пакет предусматривает возможности интерактивного взаимодействия, а именно:

- пометка сообщения как избранного

> [!NOTE]
> Сообщение, которое было помечено как избранное остаётся таким даже после того, как произошла перезагрузка страницы.

- в случае, когда текстовое содержимое сообщения является слишком длинным , появляется кнопка "Далее", которая позволяет отобразить всё текстовое содержимое, а на месте нажатой кнопки появляется кнопка "Скрыть" и наооборот

> [!TIP]
> Длинное текстовое содержимое считается длинным, когда занимает более 3-ёх строк.

- можно выбрать тег "новое" или "эксперт", но это не влияет на что-либо
- загрузка старых сообщений при нажатии кнопки "Загрузить старые сообщения"
- сортировка списка сообщений "от новых к старым" или "от старых к новым"

## \_R\__ for a Hotel

### Quick Look

[Take a look](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/_r__-for-a-hotel/_r__-for-a-hotel.mov)

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/_r__-for-a-hotel/_r__-for-a-hotel.mov)

### Dependencies
This package includes at least these dependencies:

- SwiftUI

### Getting Started

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

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/crud-for-a-x/crud-for-a-x.gif)

#### Desktop Landscape

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/crud-for-a-x/windows-landscape.png)

#### iPhone 6 Landscape

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/crud-for-a-x/iPhone6-landscape.png)

#### iPhone 6 Portrait

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/crud-for-a-x/iPhone6-portrait.png)

#### iPhone X Landscape

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/crud-for-a-x/iPhoneX-landscape.png)

#### iPhone X Portrait

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/crud-for-a-x/iPhoneX-portrait.png)

### Dependencies
This package includes at least these dependencies:

- Vite
- SASS

### Getting Started

### Description


## CRU_ for an Application

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/cru_-for-an-application/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/cru_-for-an-application/cru_-for-an-application.gif)

### Dependencies
This package includes at least these dependencies:

- Vite
- SASS
- Bootstrap

### Getting Started

### Description

Запуск сопровождается POST-запросом к серверу, который возвращает список приложений, где у каждого приложения есть ① идентификатор, ② название, ③ идентификатор политики, ④ поле `agent_js_config` и ⑤ поле `correlations_config`.

Пакет предусматривает возможность интерактивного взаимодействия, а именно:

- отправка нового приложения на сервер
- изменение существующего приложения на сервере

## CV[^2]
### Quick Look
[Take a look](https://vladimircreator.github.io/Packages/cv/).

### Dependencies
This package includes at least these dependencies:

- Vite
- TypeScript
- Radix
	- Avatar
	- Dialog
	- Slot
- Tailwind CSS

### Getting Started

### Description
Название этого пакета говорит само за себя.

[^2]: This package is possible because of [this repository](https://github.com/BartoszJarocki/cv/tree/5c0a61989eb98cf0f240d5042ceda8457f2935f0).

## Exam for December 2022

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/exam-for-december-2022/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/exam-for-december-2022/exam-for-december-2022.gif)

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/exam-for-december-2022/-initial.png)

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/exam-for-december-2022/-success.png)

![](./zGitHubAndYouShouldIgnoreThisDirectory/static/exam-for-december-2022/-fail.png)

### Dependencies
This package includes at least these dependencies:

- Vite

### Getting Started

```bash
$ export TITLE_FOR_EXAM_FOR_2022="<YOUR TITLE>"
```

## Just a Card
[Take a look](https://vladimircreator.github.io/Packages/just-a-card/).

### Dependencies
This package includes at least these dependencies:

- Vite
- TypeScript
- React
- SASS

### Getting Started

### Description


## Just a Form
[Give it a shot](https://vladimircreator.github.io/Packages/just-a-form/).

### Dependencies
This package includes at least these dependencies:

- Vite
- React

### Description

## Shade Explorer

### Quick Look

[Give it a shot](https://vladimircreator.github.io/Packages/shade-explorer/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/shade-explorer/shade-explorer.gif)

### Dependencies
This package includes at least these dependencies:

- Vite

## X

### Quick Look
[Give it a shot](https://vladimircreator.github.io/Packages/x/).

![](./zGitHubAndYouShouldIgnoreThisDirectory/dynamic/x/x.gif)

### Dependencies
This package includes at least these dependencies:

- Vite
- TypeScript
- React
- Redux
- Tailwind CSS

### Getting Started

## Changelog

### Sat 8 Jul 2023 8:10 PM
Rename this repository from Swift-Playgrounds to Playgrounds.

### Sun 5 Nov 2023 9:27 PM
Rename this repository from Playgrounds to gists.

### Sun 10 Nov 2023 8:03 AM
Rename this repository from gists to Packages.

## License
See [License](LICENSE).
