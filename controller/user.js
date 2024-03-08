const User = require('../model/user')

async function handleUserSignup(req, res) {
    const { username , password} = req.body;
    await User.create({
        username,
        email,
        password
    });   
    
    return res.render("index");

}

module.exports = +{handleUserSignup};