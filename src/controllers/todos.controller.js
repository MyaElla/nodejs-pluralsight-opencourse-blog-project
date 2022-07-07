const axios = require("axios");

exports.findAll = async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  res.send(data.response);
};

exports.findById = async (req, res) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/" + req.params.id
    );
    res.send(response.data);
  } catch (error) {
    console.log("Error: " + error);
    res.status(error.response.status).send(error.response.statusText);
  }
};
