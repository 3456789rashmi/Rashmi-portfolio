const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Frontend", "Backend", "Tools", "Other"],
    },
    proficiency: {
      type: Number,
      min: 0,
      max: 100,
      required: true,
    },
    icon: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Skill", skillSchema);
