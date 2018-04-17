const express = require("express");
const router = express.Router();
const userData = require("../data/users");
var Guid = require("Guid");

router.post("/", (req, res) => {
    //console.log("reach Login Route");
    const username = req.body.username;
	const password = req.body.password;
    
    if(!username){
        var data = {
                error: true,
                err_msg: "Error: missing username"
                };
        res.render("login", data);
                 }
    if(!password){
        var data = {
                error: true,
                err_msg: "Error: missing password"
                };
        res.render("login", data);
                 }
    else{
        const user =  userData.getUserByName(username);
        //console.log(user);
        //console.log(user == null);
        if(user){
            //console.log(user);
            const authenticate = userData.authenticate(username, password);
            //console.log(authenticate);
            //console.log(user);
            if(authenticate){
                var sid = Guid.create().toString();
                //console.log(sid);
                res.cookie("AuthCookie", sid);
                //console.log(user);
                userData.addSid(user, sid);
                //console.log(user.sid);
                res.redirect("/private");
            }else{
                var data = {
                error: true,
                err_msg: "Error: Incorrect username / password"
                };
                res.render("login", data);
            }
        }else{
            var data = {
                error: true,
                err_msg: "Error: User Not Found"
                };
            res.render("login", data);
        }
    }
});

module.exports = router;