const express = require('express');
const app = express.Router();
const memberController = require('../controllers/memberController')
// const auth = require("../middleware/auth");

app.get("/", memberController.getMember);

app.get("/:id",memberController.getMemberById);

app.get("/name/:name",memberController.getMemberByName);

app.post("/", memberController.addMember);

app.put("/:id", memberController.editWholeMember);

// app.patch("/:id",auth,bookController.editProduct);

app.delete("/:id", memberController.deleteMember);

module.exports = app;