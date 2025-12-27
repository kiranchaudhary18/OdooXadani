const Team = require("../models/Team");
const User = require("../models/User");

/**
 * CREATE TEAM
 */
exports.createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({ message: "Failed to create team" });
  }
};

/**
 * GET ALL TEAMS
 */
exports.getTeams = async (req, res) => {
  try {
    const teams = await Team.find().populate("members", "name email role");
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch teams" });
  }
};

/**
 * GET SINGLE TEAM
 */
exports.getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id).populate(
      "members",
      "name email role"
    );

    if (!team) {
      return res.status(404).json({ message: "Team not found" });
    }

    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch team" });
  }
};

/**
 * ADD MEMBER TO TEAM
 */
exports.addMember = async (req, res) => {
  try {
    const { userId } = req.body;

    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    if (!team.members.includes(userId)) {
      team.members.push(userId);
      await team.save();

      await User.findByIdAndUpdate(userId, { team: team._id });
    }

    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: "Failed to add member" });
  }
};

/**
 * REMOVE MEMBER FROM TEAM
 */
exports.removeMember = async (req, res) => {
  try {
    const { userId } = req.body;

    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    team.members = team.members.filter(
      member => member.toString() !== userId
    );
    await team.save();

    await User.findByIdAndUpdate(userId, { team: null });

    res.status(200).json(team);
  } catch (error) {
    res.status(500).json({ message: "Failed to remove member" });
  }
};
