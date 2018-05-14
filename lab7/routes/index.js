const recRoute = require("./recipes");

const constructorMethod = app => {
  app.use("/recipes", recRoute);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;