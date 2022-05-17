const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  position: {
    type: String,
    required: [true, "Please provide the position"],
    maxlength: [50, "Character length exceded"],
  },
  code: {
    type: String,
    required: [true, "job code is missing"],
  },
  company: {
    type: String,
    required: [true, "Company  is missing"],
  },
  location: {
    type: String,
    required: [true, "location  is missing"],
  },
  ageLimit: {
    type: Number,
    required: [true, "enter the age limit"],
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
  qualification: {
    type: String,
    required: [true, "qualification  is missing"],
  },
  gender: {
    type: String,
    default: "any",
  },
  experience: {
    type: Number,
    required: [true, "Experience  is missing"],
  },
});

module.exports = mongoose.model("jobs", jobsSchema);
