const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 2,
  },

  years: {
    type: Number,
    required: true,
    minLength: 1,
    maxLength: 100,
  },

  kind: {
    type: String,
    required: true,
    minLength: 3,
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Provide valid creature image link!"],
  },
  needs: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20,
  },
  location: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 15,
  },
  description: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  donations: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});
const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
