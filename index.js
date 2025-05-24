const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3005;
const router = require('./router/');
const path = require("path");
const mongoose = require('mongoose')

// mongoose.connect('mongodb://admin:12345@localhost:27017/myDB?authSource=admin', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('✅ Успешное подключение к MongoDB'))
//     .catch(err => console.error('❌ Ошибка подключения:', err));

app.use(cookieParser());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.set('view options', {
    async: false,
    compileDebug: true
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
});

