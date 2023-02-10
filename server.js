const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let corsOptions = {
    origin: "bw6b8dp9wp9x49hlsbht-mysql.services.clever-cloud.com"
};

app.use(cors(corsOptions));

// Parse requests of Content-Type -application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./app/models');
db.sequelize.sync();

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome To The DangerZone application." });
  });
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });