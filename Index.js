const express = require("express");
const app = express();
require("dotenv").config();
// const port = process.env.PORT || 3000;
const routes = require("./routes/index");
const db = require("./config/database");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "TYP API",
      description: "Track Your Progress API",
      contact: {
        name: "Kiryl Sachuk",
        email: "ownfrezzy@gmail.com",
      },
      servers: ["http://localhost:3000"],
      version: "1.0.1",
    },
  },
  apis: ["./routes/*.js"],
};
// add swagger documentation
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(process.env.PORT || 3000, () => console.log(`Server started on PORT ${port}`));

db.authenticate()
  .then(() => console.log("DB connected!"))
  .catch((err) => console.log(err));

//снять коммент для синхронизации бд(удалит все данные)
// db.sync({ force: true }).then(() => console.log('DB synced')).catch((err) => console.log(err))
app.use("/api", routes);
