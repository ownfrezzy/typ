const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const db = require("./config/database");

app.listen(port, () => console.log(`Server started on PORT ${port}`));

db.authenticate()
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

app.use("/api", routes);
