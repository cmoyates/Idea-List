const express = require("express");
const app = express();
const cors = require("cors");
const suggestion_router = require("./routes/suggestions");

app.use(cors());
app.use(express.json());
app.use("/suggestions", suggestion_router);

app.use("/", async (req, res) => {
    console.log(globalThis.connectedSocket)
    res.send("Still working!");
})

module.exports = app;