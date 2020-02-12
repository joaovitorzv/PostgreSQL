const express = require("express");
const routes = require("./routes");

require('./database');

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3333);