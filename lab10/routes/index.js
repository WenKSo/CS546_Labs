const loginRoute = require("./login");
const logoutRoute = require("./logout");
const privateRoute = require("./private");
const userData = require("../data/users");
var Guid = require("Guid");

function constructorMethod (app) {
	app.use("/login", loginRoute);
	app.use("/private", privateRoute);
	app.use("/logout", logoutRoute);
    
    app.use("/", (req, res) => {
		const sid = req.cookies.AuthCookie;
        var user = userData.getUserBySessionId(sid);
        //console.log(user);
        if(user){
            res.redirect("/private");
        }else{
            var data ={
                message: ""
            }
            res.render("login",data);
        }
	});
    
	app.use("*", (req, res) => {
		var data = {
			title: "Error: 404",
			description: "Page not found."
		}
		res.status(404).render("login", data);
	});
};
module.exports = constructorMethod;