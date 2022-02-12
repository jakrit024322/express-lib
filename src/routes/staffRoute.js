const express = require('express');
const app = express.Router();
const router = express.Router();
const staffController = require('../controllers/staffController')
// const auth = require("../middleware/auth");

// app.get("/", staffController.getStaff);

// app.get("/:id",staffController.getStaffById);

// app.get("/name/:name",staffController.getStaffByName);

// app.post("/", staffController.addStaff);

// app.put("/:id", staffController.editWholeStaff);

// app.patch("/:id",auth,bookController.editProduct);

// app.delete("/:id", staffController.deleteStaff);


router.post("/addStaff",staffController.addStaff);

router.post("/login",staffController.login);

router.put("/:id",staffController.updateStaff);

module.exports = router;



// module.exports = app;