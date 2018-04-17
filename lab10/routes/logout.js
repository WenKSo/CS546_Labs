const express = require("express");
const router = express.Router();
const userData = require("../data/users");

router.get("/", async (req, res) => {
    var data = {
        error: false,
        message : "Logout"
    };
    var sid = req.cookies.AuthCookie;
    //console.log(sid);
    var user = userData.getUserBySessionId(sid);
    //console.log(user);
    res.cookie("AuthCookie", "", {expires: new Date()}); //Expire the cookie
	res.clearCookie("AuthCookie");
    userData.deleteSid(user,sid);
	res.render("logout", data);
});

module.exports = router;