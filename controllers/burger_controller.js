const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", async(req, res) => {
    const data = await burger.all();

    res.render("index", { burgers: data });
});

router.post("/api/burgers", async(req, res) => {

    const burger_name = req.body.burger_name;
    const burger_devoured = req.body.Devoured;
    console.log(burger_name);

    const data = await burger.create(["burger_name", "Devoured"], [burger_name, burger_devoured]);
    console.log(data);

    res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async(req, res) => {
    const burger_id = req.params.id;
    const effect = req.body.effect;

    let condition = `id = ${req.params.id}`;

    const data = await burger.update({ Devoured: effect }, condition);
    console.log(data);
    if (data.changedRows === 0) {
        res.status(404).end();
    }
    res.status(200).end();
});

router.delete("/api/burgers/:id", async(req, res) => {
    console.log("request made for id:", req.params.id);

    let condition = `id = ${req.params.id}`;
    const data = await burger.delete(condition);
    console.log(data);
    if (data.affectedRows === 0) {
        res.status(404).end();
    }
    res.status(200).end();
});

module.exports = router;