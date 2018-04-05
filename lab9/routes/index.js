const palinRoutes = require("./palindrome");

const constructorMethod = (app) => {
    app.use("/", palinRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Route Not Found"});
    });
};

module.exports = constructorMethod;