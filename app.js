const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const homeRouter = require("./routes/homeRoute");
const addProductPage = require("./routes/addProduct");
const contactPage = require("./routes/contactRoute");

// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use(addProductPage);
app.use(contactPage);
app.use(homeRouter);

// server portal
app.listen(4000, () => {
  console.log("listening to requests");
});
