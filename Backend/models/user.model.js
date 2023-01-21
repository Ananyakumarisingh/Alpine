const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  country: {
    type: String,
    require: true
  },
  dob: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  cpassword: {
    type: String,
    require: true
  },
  number: {
    type: String,
    require: true
  }
});

const UserModel = mongoose.model("user", userSchema);
module.exports = UserModel;
