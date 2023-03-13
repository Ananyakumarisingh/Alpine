const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt_secret = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
  const { email, password, firstname, lastname, country, dob, cpassword, number} = req.body;
  try {
    let user = new UserModel({ email });
    if (user.length) {
      return res.status(403).json({msg: "User Already Exists"});
    } else {
      bcrypt.hash(password, 8, async (err, hashPass) => {
        if (err) {
          res.send(err);
        }
        user = new UserModel({ email, password: hashPass, firstname, lastname, country, dob, number});
        await user.save();
        return res.status(200).json({msg: "User Created Successfully"});
      });
    }
  } catch (error) {
    console.log(error);
    res.send("Error in registration");
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.find({ email });
    if (user.length) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result) {
          var token = jwt.sign({ data: user[0].id }, jwt_secret, {
            expiresIn: "2 days",
          });
          const firstname = user[0].firstname;
          const email = user[0].email;
          res.send({token, firstname, email});
        } else {
          res.status(400).send("Invalid Credentials");
        }
      });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (error) {
    res.status(500).send("Invalid Credentials");
    console.log(error);
  }
};
