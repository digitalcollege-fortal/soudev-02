const express = require("express");
const app = express.Router();

app.get("/categories", (req, res) => {
    res.send("lista de categorias");
})

module.exports = app;
