const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  hobby: {
    type: Array,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const admin = mongoose.model("admintable", adminSchema);

module.exports = admin;
