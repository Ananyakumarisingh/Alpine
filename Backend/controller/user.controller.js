const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const jwt_secret = process.env.JWT_SECRET;

exports.registerUser = async (req, res) => {
  const { email, password, firstname, lastname, country, dob, cpassword, number} = req.body;
  try {
    let user = new UserModel({ email });
    if (user.length) {
      res.status(400).send("Ops! User already exsist.");
    } else {
      bcrypt.hash(password, 8, async (err, hashPass) => {
        if (err) {
          res.send(err);
        }
        user = new UserModel({ email, password: hashPass, firstname, lastname, country, dob, number});
        await user.save();
        res.send("User registered");
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
          res.status(400).send("Invalid Credentials"); // 400 bad request
        }
      });
    } else {
      res.status(400).send("Invalid Credentials"); // 400 bad request
    }
  } catch (error) {
    res.status(500).send("Invalid Credentials"); //500 Internal error
    console.log(error);
  }
};
/*
JWT 
STEP 1. LOGIN -> Create -> (userID, jwt_secret) -> response -> token .. res.json({token})
STEP 2. middleware(authenticator) -> (token, jwt_secret) -> response -> userID .. req.userID = data(userID)
*/
/*

bcrypt
STEP 1. REGISTER -> Create -> bcrypt(normalPassword, saltRount, cb(err, encoded_password))
*  cb(err, encoded_password){
*   if(err) res.send(error);
*   const newUSer = new UserModel({name , email, dob, location, password: encoded_password})
*  }
STEP 2. Compare -> (normalPassword, encoded_password, cb(err, result))
cb(err, result){
  if(err) res.send(err)
  if(result){
   JWT token // password is true 
  } else {
    res.status(400).send('bad request)
  }
}
*/
/*
FRONTEND -> BACKEND
frontend (baseurl) = localhost:3500/

*/