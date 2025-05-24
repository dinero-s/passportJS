const userSchema = require('../models/userModel');

const getLoginPage = async (req, res) => {
    res.render('login')
}

const createUser = async (req, res) => {
    const { username, password } = req.body

    try {
        const newUser = await new userSchema({username, password});
        await newUser.save()
        res.render('profile', { user: {
                username: newUser.username,
                password: newUser.password
            }
        });
    } catch(e){
        console.log(e.message);
    }
}

const userLogin = async (req, res) => {
    const { username, password } = req.body

    try {
        res.render('profile', { user: {
            username, password
        }
        });
    } catch(e){
        console.log(e.message);
    }
}

const getProfile = async (req, res) => {
    res.json('My profile');
}

module.exports = {
    createUser,
    getProfile,
    getLoginPage,
    userLogin
}
