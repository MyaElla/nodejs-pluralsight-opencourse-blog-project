module.exports = (app) => {
  const router = require("express").Router();

  router.get("/", (req, res) => {
    res.send("You have reached the router handler for get all blog posts....");
  });

  const bPosts = require("../controllers/blogPosts.controller");
  router.get("/", bPosts.findAll);
  router.get("/:id", bPosts.findById);
  router.post("/", bPosts.create);
  router.put("/:id", bPosts.update);
  router.delete("/:id", bPosts.delete);

  app.use("/api/blogPosts", router);
};
