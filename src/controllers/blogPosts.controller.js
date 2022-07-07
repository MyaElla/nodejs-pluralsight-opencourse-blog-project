const axios = require("axios");

exports.findAll = async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  res.send(response.data);
};

exports.findById = async (req, res) => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts/" + req.params.id)
    .catch((error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        res
          .status(data.error.response.status)
          .send(data.error.response.statusText);
      }
    });

  res.send(response.data);
};

exports.create = async (req, res) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: req.body.title,
      body: req.body.body,
      userId: req.body.userId
    }
  );

  res.send(response.data);
};
