Материалы к лекции по React для Yaroslavl Frontend Meetup #10
=============================================================

В этом репозитории лежат исходники клиента и сервера, которые описаны в лекции
Ссылку на видео добавлю потом.


Заставка
========

React
или теперь я хочу опять всё переписать

Алексей Гуськов
Компания Ареал


Setup
=====
Перед презентацией на компе готово:

* открытые на фулскирин окна с увеличеными шрифтами
  * редактор
  * консоль (для копирования файлов, запуска чего-либо)
  * браузер
* подготовлен документ со шпаргалками
  * проект в состоянии “сделан npm install, работает npm start, запускается dev-server и с него показывается hello-world




Заготовка
=========

Из заготовок достали начальный проект (см. setup, 3) говорим про npm, babel, webpack - кратко в 2-3 слова что они делают.
Показываем что запускается и кажет hello world.

*Новое:* npm, package.json, babel, webpack, index.html, index.js, webpack-dev-server, npm start




React и рендеринг
=================

Подключаем React, делаем компонент в отдельном файле и рендерим его в DOM

*Новое:* react, reactdom, React.Component, render, теги



index.js
--------






App.js
----





Вложенные компоненты
====================

В том же файле делаем вложенный компонент, подключаем в основной.

*Новое:* теги компонентов, props, фигурные скобки



App.js
------





Начинаем писать приложение
==========================

Из заготовок достаем верстку чатика, показываем. Размещает ее просто в render у App

*Новое:* сначала пишем вёрстку, потом создаём структуру компонентов (прям как в старые времена php)

App.js
------














Как ходят данные
================

Из заготовок достаем демо-стейт приложения, руками внедряем его у нужные компоненты.
Показываем как можно в верстке делать map и т.п.

*Новое:* map, стрелочная функция, стелочная функция с неявным return

App.js
------












Разбиваем на компоненты
=======================

Разбиваем верстку на компоненты.
Руками показываем компонент Rooms.
Показываем как отдаем в него данные и как он может извещать о чем-то внутри (выбор комнаты).

*Новое:* идея разделения тупых(view) и умных(controller) компонентов, колбеки в react, стейт, мутаторы, иммутабл стейт, сетстейт











Достаём разбитый на компоненты чатик
====================================

Из заготовок достаем разбитый на компоненты чатик. Показываем.

В этот момент у нас есть рабочий чатик но без сервера, на демо-данных.
Мы можем писать в чат с какого-то захардкоженого логина (Гость), выбирать комнату.

*Новое:* ничо






Форма смена логина
==================

Руками делаем форму входа и применяем условную верстку - если нет логина показываем форму, если есть - чат и комнаты

*Новое:* условная вёрстка





Добавляем серверные апи
=======================

Достаем из заготовок пример с рабочим сервером. Показываем что мы создаем его в componentDidMount

*Новое:* куда складывать либы, componentDidMount





Плюсы и минусы React
====================

*Плюсы:*
+ простой, решает только задачу отображения view
+ быстрый, хорошая реализация vdom
+ однонаправленный
+ легко тестировать
+ легко делать server-side rendering
+ легко интегрируется с bootstrap\material-ui\semantic-ui и т.п.
+ легко обучать сотрудников (особенно выросших из php)

*Минусы:*
- работает совсем не так как jquery
- нужно юзать оптимизации
- immutable state это не очень просто



Конец
=====

С вами был Алексей Гуськов
@lexaguskov
https://github.com/kvasdopil/react-lect1