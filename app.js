const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/", async (req, res) => {
    console.log("Success");
    res.send("Success");
})

module.exports = app;