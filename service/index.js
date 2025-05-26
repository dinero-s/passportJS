const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    async (username, password, done) => {
        try {
            const user = await userSchema.findOne({ username });
            if (!user) return done(null, false);

            const isPasswordValid = await user.verifyPassword(password);
            if (!isPasswordValid) return done(null, false);

            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await userSchema.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});

const getLoginPage = async (req, res) => {
    res.render('login')
}

const createUser = async (req, res) => {
    const { username, password } = req.body
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
        const newUser = await new userSchema({username, hashedPassword});
        await newUser.save()
        res.render('profile', { user: {
                username: newUser.username,
                password: '******'
            }
        });
    } catch(e){
        console.log(e.message);
    }
}

const getProfile = async (req, res) => {
    const user = await userSchema.findById(req.user._id);
    res.render('profile', { user: {
            username: user.username,
            password: '******'
        }
    });
}

module.exports = {
    createUser,
    getProfile,
    getLoginPage
}
