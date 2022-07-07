const express = require("express");
const cors = require("cors");

const app = express(); //initialize a new Express app by calling the express() constructor
app.use(express.json()); //use the express.json() middleware to parse JSON bodies into JS objects
app.use(cors()); //use the cors() middleware to allow cross-origin requests

// add top-level route handler
// app.get("/", (req, res) => {
//   res.send("This is the top route in the Blog Post APIxxxx");
// });

app.get("/", cors(), (req, res) => {
  res.json({
    message: "Hello World"
  });
});

// -------------
require("./src/routes/blogPosts.route")(app);
require("./src/routes/users.route")(app);
require("./src/routes/todos.route")(app);

const PORT_NUMBER = process.env.PORT || 3000;
app.listen(PORT_NUMBER, () => {
  console.log("App listening on port 3000!");
});
