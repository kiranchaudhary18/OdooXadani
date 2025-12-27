const express = require("express");
const router = express.Router();
const controller = require("../controllers/maintenance.controller");
const auth = require("../middleware/auth.middleware");

router.post("/", auth, controller.createRequest);

router.get("/", auth, controller.getRequests);

router.get("/calendar", auth, controller.getCalendarRequests);

router.patch("/:id/assign", auth, controller.assignTechnician);

router.patch("/:id/status", auth, controller.updateStatus);

router.patch("/:id/complete", auth, controller.completeRequest);

module.exports = router;
