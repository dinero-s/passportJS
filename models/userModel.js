const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    username: String,
    hashedPassword: String
});

userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.hashedPassword);
};

module.exports = model('User', userSchema);