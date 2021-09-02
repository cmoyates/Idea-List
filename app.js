const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use("/:user/:suggestion", async (req, res) => {
    const {user, suggestion} = req.params;
    const msg = `Success, ${user} said: ${suggestion}`
    console.log(msg);
    res.send(msg);
})

module.exports = app;