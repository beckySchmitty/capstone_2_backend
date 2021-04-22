const express = require("express");
const router = new express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const {SECRET_KEY } = require("../config");
const ExpressError = require("../expressError");

router.get('/hi', (req, res, next) => {
    res.send("APP IS WORKING!!!")
  })


// POST /register
// {username, password, email, img_url} => token
router.post('/register', async (req, res, next) => {
  try {
    console.log(req)
    let {username, password, email, img_url} = req.body;
    const user = await User.register({username, password, email, img_url})

    if(user) {
      const token = jwt.sign({username}, SECRET_KEY);
      return res.json({token})
    } else {
      throw new ExpressError("Error: user not created", 400)
    }
  } catch(e) {
    return next(e)
  }
})

// POST /login
// {username,password} => token
router.post('/login', async (req, res, next) => {
    try {
      let {username, password} = req.body;
      if(await User.authenticate(username, password)) {
        const token = jwt.sign({username}, SECRET_KEY);
        return res.json({token})
      } else 
        throw new ExpressError("Invalid username/passwrd", 400);
    } catch(e) {
      return next(e)
    }
  })


// GET username
// => {user}
// returns {username, email, img_url}
 router.get("/:username", async function (req, res, next) {
  try {
    const user = await User.get(req.params.username);
    return res.json({ user });
  } catch (err) {
    return next(err);
  }
});


 module.exports = router;


//  {
// 	"username": "tester",
// 	"password": "password",
// 	"email": "fake@gmail.com",
// 	"img_url": "#"	
// }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RlciIsImlhdCI6MTYxODkyMjUxNH0.C_OvinNGu-UrNqeaq8wy8N4TCfWTfRfPCBOkljtfcDY