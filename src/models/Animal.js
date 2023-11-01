const mongoose = require("mongoose");

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  years: {
    type: String,
    required: true,
  },

  kind: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
    match: [/^https?:\/\/.+/, "Provide valid creature image link!"],
  },
  needs: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  //   votes: [
  //     {
  //       type: mongoose.Types.ObjectId,
  //       ref: "User",
  //     },
  //   ],
});
const Animal = mongoose.model("Animal", animalSchema);
module.exports = Animal;
