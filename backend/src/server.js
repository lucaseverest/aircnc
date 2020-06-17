const express = require("express");
//rotas
const mongoose = require("mongoose");
//mongodb

const cors = require("cors");

const routes = require("./routes");
//arquivo das rotas

const app = express();

mongoose.connect(
  "mongodb+srv://omnistack:omnistack@aircnc-9tcgr.mongodb.net/aircnc?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    userUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
