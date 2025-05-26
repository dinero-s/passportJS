const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 3005;
const router = require('./router/');
const path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

mongoose.connect('mongodb://root:example@localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Успешное подключение к MongoDB'))
    .catch(err => console.error('Ошибка подключения к MongoDB:', err));

app.use(cookieParser());
app.use(express.json());

app.use(session({
    secret: 'Secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));

app.set('view options', {
    async: false,
    compileDebug: true
});

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
});

