const jwt = require("jsonwebtoken");

const getToken = (payload) => {
  return jwt.sign(
    {
      data: payload,
    },
    "SECRET",
    { expiresIn: "2 days" }
  );
};

const getDataToken = (token) => {
  let dataToken = null;
  jwt.verify(token, "SECRET", (err, decoded) => {
    if (err) {
      console.log(err);
    } else {
      dataToken = decoded;
    }
  });
  return dataToken;
};

module.exports = {
  getDataToken,
  getToken,
};
