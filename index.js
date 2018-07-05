require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");

const controller = require("./controller");

const app = express();
app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
    // db.new_planes().then(response => console.log(response));
    // db.get_planes()
    //   // .then(response => console.log(response))
    //   .then(planes => console.log(planes))
    //   .catch(err => console.log(errr));
  })
  .catch(err => console.log(err));

app.get("/api/planes", controller.getPlanes);

app.get("api/plane", controller.getOnePlane);

app.post("/api/planes", controller.addPlane);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
