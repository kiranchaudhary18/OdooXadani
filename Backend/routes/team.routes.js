const express = require("express");
const router = express.Router();
const controller = require("../controllers/team.controller");
const auth = require("../middleware/auth.middleware");
const role = require("../middleware/role.middleware");

router.post("/", auth, role(["admin", "manager"]), controller.createTeam);

router.get("/", auth, controller.getTeams);

router.get("/:id", auth, controller.getTeamById);

router.post("/:id/add-member", auth, role(["admin", "manager"]), controller.addMember);

router.post("/:id/remove-member", auth, role(["admin", "manager"]), controller.removeMember);

module.exports = router;
