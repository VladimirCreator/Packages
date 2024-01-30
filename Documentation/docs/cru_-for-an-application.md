<!-- @VladimirCreator created this file  at 10:55 PM on Tue 30 Jan 2024.
     @VladimirCreator modified this file at 10:56 PM on Tue 30 Jan 2024 last time.
-->
## CRU_ for an Application

### Предпросмотр

[Попробовать](https://vladimircreator.github.io/Packages/cru_-for-an-application/).

![](/cru_-for-an-application/cru_-for-an-application.gif)

### Зависимости
Этот пакет как минимум включает в себя эти зависимости:

- Vite
- SASS
- Bootstrap

### Начало работы

```bash
$ export VITE_TITLE= # Semi-optional
```

### Описание

Запуск сопровождается POST-запросом к серверу, который возвращает список приложений, где у каждого приложения есть ① идентификатор, ② название, ③ идентификатор политики, ④ поле `agent_js_config` и ⑤ поле `correlations_config`.

Пакет предусматривает возможность интерактивного взаимодействия, а именно:

- отправка нового приложения на сервер
- изменение существующего приложения на сервере
