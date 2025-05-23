// <!DOCTYPE html>
// <html lang="ru">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Профиль</title>
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
//     }
//         h1 {
//         color: #333;
//         font-weight: 400;
//         border-bottom: 1px solid #eee;
//         padding-bottom: 0.5rem;
//     }
//         p {
//         color: #666;
//     }
//         a {
//         color: #4285f4;
//         text-decoration: none;
//     }
//         a:hover {
//         text-decoration: underline;
//     }
//         .user-info {
//         background: #f9f9f9;
//         padding: 1rem;
//         border-radius: 4px;
//         margin: 1rem 0;
//     }
//     </style>
// </head>
// <body>
// <div class="container">
//     <h1>Ваш профиль</h1>
//
//     <div class="user-info">
//         <p><strong>Имя пользователя:</strong> <%= user.username %></p>
//         <p><strong>Email:</strong> <%= user.email || 'Не указан' %></p>
//     </div>
//
//     <p><a href="/">На главную</a> | <a href="/logout">Выйти</a></p>
// </div>
// </body>
// </html>