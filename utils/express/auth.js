/// Core ExpressJS file for Authentification

// Load Packages
const { express, bcryrpt, passport } = require("../electron/packages");
const { router } = require("./router");
const { forwardAuthenticated } = require("../config/auth");

// Load User Model
const User = require("../database/models/User");

router.get("/register", (req, res) => {});

// Handle Register Request
router.post("/login", (req, res) => {
  console.log("register request submitted");
  console.log(req.body);

  // Extract Form Inputs
  const { r_email, r_username, r_password } = req.body;
  console.log(r_email, r_username, r_password);

  // Create a new user
  const newUser = new User({
    name: r_username,
    email: r_email,
    password: r_password
  });

  // Save the new user in the database
  newUser
    .save()
    .then(user => {
      console.log("New user has been saved to the database");
    })
    .catch(err => console.log(err));
  /*const { name, email, password } = req.body;
  const newUser = new User({
    name,
    email,
    password
  });
  newUser
    .save()
    .then(user => {
      console.log("New user created");
    })
    .catch(err => console.log(err));*/
});
