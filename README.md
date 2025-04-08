# VeryGoodNews

VeryGoodNews — это веб-приложение, разработанное с использованием [Create React App](https://create-react-app.dev/), предназначенное для предоставления пользователям актуальных новостей.

## Начало работы

### Предварительные требования

Перед началом работы убедитесь, что на вашем компьютере установлены следующие программные компоненты:

- [Node.js](https://nodejs.org/) (14.x или выше)
- [npm](https://www.npmjs.com/) (устанавливается вместе с Node.js)

### Установка

```
git clone https://github.com/DaryaAndryeva/VeryGoodNews.git
cd VeryGoodNews
npm install
```

## Доступные команды

### npm start

Запуск режима разработки. Откройте [http://localhost:3000](http://localhost:3000).

### npm test

Запуск тестов в интерактивном режиме.

### npm run build

Сборка приложения для продакшна.

### npm run eject

Внимание: действие необратимо. Снимает абстракцию Create React App.

---

## Деплой

### Развёртывание на GitHub Pages

1. Установите gh-pages:
   `npm install --save gh-pages`
   
2. В package.json добавьте:
```
   "homepage": "https://DaryaAndryeva.github.io/VeryGoodNews",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
```


4. Выполните:
`npm run deploy`
   

5. После этого проект будет доступен по ссылке:  
   [https://DaryaAndryeva.github.io/VeryGoodNews](https://DaryaAndryeva.github.io/VeryGoodNews)

---

## Структура проекта

- public/ — статические файлы.
- src/ — исходный код приложения:
  - components/ — React-компоненты
  - assets/ — изображения и стили
  - App.js — главный компонент
  - index.js — точка входа
