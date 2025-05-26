const passport = require("passport");

const userMiddleWare = (req, res, next) => {

    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.status(401).json({ message: info.message || 'Authentication failed' });
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.redirect('/user/me');
        });
    })(req, res, next);
};

module.exports = userMiddleWare;