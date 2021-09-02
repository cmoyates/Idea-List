const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/:arg", async (req, res) => {
    const {arg} = req.params;
    const msg = `Success, you said: ${arg}`
    console.log(msg);
    res.send(msg);
})

module.exports = app;