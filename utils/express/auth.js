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
  // Extract Form Inputs
  const { r_email, r_username, r_password } = req.body;

  User.findOne({ email: r_email }).then(user => {
    if (user) {
      // User with this email already exist
      console.log("Email already exists");
    } else {
      // User with this email DOESN'T exist

      // Create a new user
      const newUser = new User({
        name: r_username,
        email: r_email,
        password: r_password
      });

      // Hash the user's password
      bcryrpt.genSalt(10, (err, salt) => {
        bcryrpt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          // Save the user to the database
          newUser.save((err, user) => {
            if (err) return console.error(err);
            console.log(user + " has been saved to the database");
          });
        });
      });
    }
  });
});
