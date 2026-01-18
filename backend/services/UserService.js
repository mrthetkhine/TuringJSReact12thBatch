const bcrypt = require('bcrypt');
const {config} = require('../config/Config');
const jwt = require("jsonwebtoken");
const User = require('../models/User');

async function registerUser(user)
{

    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(user.password, salt);
    let newUser = new User({
        username:user.username,
        password:hashedPassword,
        role:user.role,
    })
    let registeredUser = await newUser.save();
    let payload = {
        username: registeredUser.username,
        role: registeredUser.role,
    }
    let token = jwt.sign(payload, config.TOKEN_SECRET)
    return {token};
}
async function loginUser(user) {
    let registeredUser = await User.findOne({
        username: user.username,
    });
    if (!registeredUser) {
        throw new Error('Invalid user');
    }
    else
    {
        const valid = await bcrypt.compare(user.password, registeredUser.password);
        if(!valid)
        {
            throw new Error('Invalid user');
        }
        else
        {
            let payload = {
                username: registeredUser.username,
                role: registeredUser.role,
            }
            let token = jwt.sign(payload, config.TOKEN_SECRET)
            return {
                token
            };

        }
    }
}
module.exports = {
    registerUser,
    loginUser,
}