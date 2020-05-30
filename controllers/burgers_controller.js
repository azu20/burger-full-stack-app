const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async (req, res) => {
  const data = await burger.all();

  res.render("index", { burgers: data });
});

router.post("/api/burgers", async (req, res) => {
  const data = await burger.create(["burger_name", "Devoured"], [req.body.burger_name, req.body.Devoured]);

  res.json({ id: data.insertId });
});

router.put("/api/burgers/:id", async (req, res) => {
  let condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  const data = await burger.update({ Devoured: req.body.Devoured }, condition);

  if (data.changedRows === 0) {
    res.status(404).end();
  }

  res.status(200).end();
});

// Export routes for server.js to use.
module.exports = router;
