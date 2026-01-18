const userService = require('../services/userService');

async function registerUser(req, res) {
    let user = req.body;
    try
    {
        let registeredUser = await userService.registerUser(user);
        res.status(201).json(
            registeredUser
        )
    }
    catch(err)
    {
        res.status(400).json({
            error: err.message,
        })
    }
}
async function loginUser(req, res) {
    let user = req.body;
    try
    {
        let existingUser = await userService.loginUser(user);
        return res.status(200).json(existingUser);
    }
    catch(err){
        return res.status(401).json(err.message);
    }
}
module.exports ={
    registerUser,
    loginUser,
};