# React: каркас сайта

React, React Router DOM и Vite. Страницы содержат только заголовки.

## Запуск

```sh
npm install
npm start
```

Откройте адрес, который Vite выведет в терминале (обычно http://localhost:5173).

## Команды

- `npm start` — сервер разработки.
- `npm run build` — сборка в `dist`.
- `npm run preview` — локальный просмотр сборки.

## Структура

- `src/components/` — Header и Footer.
- `src/layouts/Layout.jsx` — общая оболочка страниц.
- `src/pages/` — Главная, Услуги, О нас, Контакты и страница 404.
- `src/App.jsx` — маршруты.
- `src/styles.css` — общие стили и адаптивная навигация.

При размещении сборки настройте сервер так, чтобы адреса страниц
(`/services`, `/about`, `/contacts`) возвращали `index.html`.
