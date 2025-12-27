const express = require("express");
const router = express.Router();
const controller = require("../controllers/equipment.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role(["admin", "manager"]), controller.createEquipment);

router.get("/", auth, controller.getAllEquipment);

router.get("/:id", auth, controller.getEquipmentById);

router.patch("/:id", auth, role(["admin", "manager"]), controller.updateEquipment);

router.get("/:id/maintenance", auth, controller.getEquipmentMaintenance);

router.patch("/:id/scrap", auth, role(["manager"]), controller.scrapEquipment);

module.exports = router;
