const express = require("express");
const router = express.Router();
const controller = require("../controllers/report.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.get("/dashboard", auth, controller.getDashboardStats);

router.get("/requests-by-team", auth, role(["admin", "manager"]), controller.requestsByTeam);

router.get("/requests-by-equipment", auth, role(["admin", "manager"]), controller.requestsByEquipment);

module.exports = router;
