const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  registerRules,
  loginRules,
  validation,
} = require("../middelwares/validator");

const isAuth = require("../middelwares/passport");

// router.get("/", (req, res) => {
//   res.send("hello");
// });




//REGISTER

router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password,mobile,date_of_obtaining_permit, } = req.body;
  try {
    const newUser = new User({ name, lastname, email, password,mobile,date_of_obtaining_permit,image });

    // check if the email exist
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    newUser.password = hashedPassword;

    //generating a token

    //save the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });
    res
      .status(200)
      .send({ newUserToken, msg: "user saved..", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send(" can not save the user...");
  }
});

//login

router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //find if the user exists
    const searchedUser = await User.findOne({ email });
    //find if the email not exist
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    //passwords are equals
    const match = await bcrypt.compare(password, searchedUser.password);
    if (!match) {
      return res.status(400).send({ msg: "bad Credential" });
    }
    // create a token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = await jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 100000,
    });

    //send the user
    res
      .status(200)
      .send({ user: searchedUser, msg: "success", token: `Bearer ${token}` });
  } catch (error) {
    res.status(500).send({ msg: "cannot find the user" });
  }
});

//get methode
router.get("/current", isAuth(), (req, res) => {
  res.status(200).send({ user: req.user });
});
router.get('/all', async (req, res) => {
  try {
    const result = await User.find(); // Added semicolon
    res.send({ user: result, msg: "Toutes les voitures" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Erreur lors de la récupération des voitures" }); // Added error response
  }
});



module.exports = router;
