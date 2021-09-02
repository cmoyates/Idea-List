const express = require("express");
const app = express();
const cors = require("cors");
const suggestion_router = require("./routes/suggestions");

app.use(cors());
app.use(express.json());
app.use("/suggestions", suggestion_router);

/*app.use("/suggestions/:user/:suggestion", async (req, res) => {
    const {user, suggestion} = req.params;
    const msg = `Success, ${user} said: ${suggestion}`
    console.log(msg);
    res.send(msg);
})*/

app.use("/", async (req, res) => {
    res.send("Stil working!");
})

module.exports = app;