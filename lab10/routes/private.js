const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get(`/`, (req, res) => {
    
    const sid = req.cookies.AuthCookie;
    //console.log(req.cookies);
    var user = userData.getUserBySessionId(sid);
    //console.log(user);
    if(user){
        var data = {
            user: user,
            error: false,
            message: "Logged In Successfully"
        }
        //console.log("Hello");
        res.render("private", data);
    }else{
    var data = {
            error: true,
            message: "Failed to log in"
        }
    res.status(403).render("error", data);
    }
});

module.exports = router;