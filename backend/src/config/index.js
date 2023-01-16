require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3002,
  CLIENT: process.env.CLIENT || "http://localhost:3000",
};
