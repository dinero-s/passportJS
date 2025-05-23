// <!DOCTYPE html>
// <html lang="ru">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Главная</title>
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
//     <style>
//         body {
//         font-family: 'Roboto', sans-serif;
//         background-color: #f5f5f5;
//         margin: 0;
//         padding: 0;
//     }
//         .container {
//         max-width: 800px;
//         margin: 2rem auto;
//         padding: 2rem;
//         background: white;
//         border-radius: 8px;
//         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         text-align: center;
//     }
//         h1 {
//         color: #333;
//         font-weight: 400;
//     }
//         p {
//         color: #666;
//         margin: 1.5rem 0;
//     }
//         a {
//         display: inline-block;
//         margin: 0 0.5rem;
//         padding: 0.5rem 1rem;
//         background-color: #4285f4;
//         color: white;
//         text-decoration: none;
//         border-radius: 4px;
//     }
//         a:hover {
//         background-color: #3367d6;
//     }
//     </style>
// </head>
// <body>
// <div class="container">
//     <h1>Добро пожаловать!</h1>
//
//     <% if (user) { %>
//     <p>Вы вошли как <strong><%= user.username %></strong></p>
//     <div>
//     <a href="/profile">Профиль</a>
//     <a href="/logout">Выйти</a>
//     </div>
//     <% } else { %>
//     <p>Пожалуйста, войдите или зарегистрируйтесь</p>
//     <div>
//     <a href="/login">Войти</a>
//     <a href="/register">Регистрация</a>
//     </div>
//     <% } %>
// </div>
// </body>
// </html>