
# VeryGoodNews

**VeryGoodNews** — это веб-приложение, разработанное с использованием React, предназначенное для отображения актуальных новостей. Оно создано с помощью [Create React App](https://create-react-app.dev/), что позволяет легко начать разработку и настроить проект.

## Быстрый старт

### Требования:
Перед тем как запустить проект, убедитесь, что у вас установлены следующие компоненты:
- **Node.js** версии 14 или выше
- **npm** 

### Установка:
Чтобы начать работу с проектом, необходимо склонировать репозиторий и установить все зависимости:
```
git clone https://github.com/DaryaAndryeva/VeryGoodNews.git 
cd VeryGoodNews 
npm install
```

---
## Скрипты

В проекте используются следующие команды для работы с приложением:
```
npm start       # Запуск dev-сервера для разработки
npm run build   # Сборка продакшн-версии приложения
```
## Деплой из оригинального репозитория

Если вы хотите развернуть проект из исходного репозитория (например, для демонстрации), выполните следующие шаги:

### 1. Клонирование репозитория и установка зависимостей
```
git clone https://github.com/DaryaAndryeva/VeryGoodNews.git
cd VeryGoodNews
npm install
npm install --save gh-pages
```

### 2. Настройка деплоя в `package.json`
Добавьте в файл `package.json` поле `homepage`, указывая ссылку на GitHub Pages, а также настройте скрипты для деплоя:
```
"homepage": "https://DaryaAndryeva.github.io/VeryGoodNews",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 3. Выполнение деплоя:
После этого можно запустить деплой:
```
npm run deploy
```

### 4. Проверка работы:
После успешного деплоя, сайт будет доступен по следующему адресу:
[https://DaryaAndryeva.github.io/VeryGoodNews](https://DaryaAndryeva.github.io/VeryGoodNews)

---

## Полный перенос и деплой на свой GitHub

Если вы хотите иметь полную копию проекта на своём GitHub-аккаунте и деплоить его с личного репозитория, следуйте этим шагам:

### 1. Сделайте форк проекта или склонируйте с заменой origin:
```
git clone https://github.com/DaryaAndryeva/VeryGoodNews.git 
cd VeryGoodNews
git remote remove origin
git remote add origin https://github.com/<your-username>/VeryGoodNews.git
git push -u origin main
```

### 2. Установка gh-pages:
Установите необходимые зависимости:
```
npm install
npm install --save gh-pages
```

### 3. Обновление `package.json`:
Убедитесь, что в `package.json` указаны правильные параметры для деплоя:
```
"homepage": "https://<your-username>.github.io/VeryGoodNews",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

### 4. Закоммитьте и отправьте изменения:
```
git add .
git commit -m "prepare deploy to personal repo"
git push 
```

### 5. Деплой:
Запустите деплой на GitHub Pages:
```
npm run deploy
```

### 6. Проверка:
После успешного деплоя, сайт будет доступен по следующему адресу:
[https://<your-username>.github.io/VeryGoodNews](https://<your-username>.github.io/VeryGoodNews)

---

## Структура проекта:

Проект организован следующим образом:

- `public/` — содержит статические файлы, такие как HTML и изображения.
- `src/` — основной каталог с исходным кодом:
  - `components/` — компоненты приложения.
  - `assets/` — статические ресурсы, такие как изображения и стили.
  - `App.js` — главный компонент приложения.
  - `index.js` — точка входа в приложение.
