const axios = require("axios");

exports.findAll = async (req, res) => {
  const response = await axios(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => {
    res.send(response.data);
  });

  res.send(data.response);
};

exports.findById = async (req, res) => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/users/" + req.params.id)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
      res.status(error.response.status).send(error.response.statusText);
    });
};
