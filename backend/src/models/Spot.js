const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: [Number],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Spot", UserSchema);
