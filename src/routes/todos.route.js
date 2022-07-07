module.exports = (app) => {
  const router = require("express").Router();

  router.get("/", (req, res) => {
    res.send("You have reached the routerfor the todo stuff..");
  });

  const toDos = require("../controllers/todos.controller");
  router.get("/", toDos.findAll);
  router.get("/:id", toDos.findById);

  app.use("/api/todos", router);
};
