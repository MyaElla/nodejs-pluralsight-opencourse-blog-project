module.exports = (app) => {
  const router = require("express").Router();

  router.get("/", (req, res) => {
    res.send("You have reached the router handler for get all users..");
  });

  const users = require("../controllers/users.controller");
  router.get("/", users.findAll);
  router.get("/:id", users.findById);

  app.use("/api/users", router);
};
