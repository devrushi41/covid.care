const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

const routes = require("./routes");

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

// user middlewares
app.use("/api/v1", routes);
app.get("/", (req, res) => res.send("Welcome Yo!"));

app.listen(PORT, () =>
  console.log(`COVID Care API listening on port ${PORT}!`)
);
