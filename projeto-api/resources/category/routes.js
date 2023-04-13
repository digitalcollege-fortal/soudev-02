const express = require("express");
const app = express.Router();
const controller = require("./controller");

app.get("/categories", async (req, res) => {
    try {
        res.send(await controller.listAll());
    } catch (error) {
        let er = {
            error: error,
            status: 404,
            message: error.message
        }
        res.send(er)
    }
})

app.get("/categories/:id", async (req, res) => {
    res.send(await controller.listOne(req.params.id));
})

app.post("/categories", async (req, res) => {
    res.send(await controller.create(req.body));
})

app.put("/categories/:id", async (req, res) => {
    res.send(await controller.edit(req.params.id, req.body));
})

app.patch("/categories/:id", async (req, res) => {
    res.send(await controller.disable(req.params.id));
})

app.delete("/categories/:id", async (req, res) => {
    res.send(await controller.destroy(req.params.id));
})




module.exports = app;
