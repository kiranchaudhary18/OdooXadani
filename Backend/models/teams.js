const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  description: String

}, { timestamps: true });

module.exports = mongoose.model("Team", teamSchema);
