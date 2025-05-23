// <!DOCTYPE html>
// <html lang="ru">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Вход</title>
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap" rel="stylesheet">
//     <style>
//         body {
//         font-family: 'Roboto', sans-serif;
//         background-color: #f5f5f5;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 100vh;
//         margin: 0;
//     }
//         .login-container {
//         background: white;
//         padding: 2rem;
//         border-radius: 8px;
//         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//         width: 300px;
//     }
//         h1 {
//         color: #333;
//         text-align: center;
//         margin-bottom: 1.5rem;
//         font-weight: 400;
//     }
//         input {
//         width: 100%;
//         padding: 0.75rem;
//         margin: 0.5rem 0 1rem;
//         border: 1px solid #ddd;
//         border-radius: 4px;
//         box-sizing: border-box;
//     }
//         button {
//         width: 100%;
//         padding: 0.75rem;
//         background-color: #4285f4;
//         color: white;
//         border: none;
//         border-radius: 4px;
//         cursor: pointer;
//         font-size: 1rem;
//     }
//         button:hover {
//         background-color: #3367d6;
//     }
//         .error {
//         color: #d32f2f;
//         text-align: center;
//         margin-bottom: 1rem;
//     }
//     </style>
// </head>
// <body>
// <div class="login-container">
//     <h1>Вход</h1>
//
//     <% if (messages.error) { %>
//     <div class="error"><%= messages.error %></div>
//     <% } %>
//
//     <form action="/login" method="POST">
//         <input type="text" name="username" placeholder="Имя пользователя" required>
//             <input type="password" name="password" placeholder="Пароль" required>
//                 <button type="submit">Войти</button>
//     </form>
// </div>
// </body>
// </html>