/// Core ExpressJS file for Authentification

// Load Packages
const { express, bcryrpt, passport } = require("../electron/packages");
const { router } = require("./router");
const { forwardAuthenticated } = require("../config/auth");

// Load User Model
const User = require("../database/models/User");

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcryrpt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    newUser.save((err, user) => {
      if (err) return console.log(err);
      console.log(user + " has been created");
    });
    res.redirect("/");
  } catch {
    res.redirect("/register");
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/register",
    failureFlash: true
  })
);

router.get("/register", (req, res) => {
  res.redirect("/login");
});

router.get("/login", (req, res) => {
  res.redirect("/login");
});

/*router.get("/login", forwardAuthenticated, (req, res) =>
  res.redirect("/login")
);

// Handle Register Request
router.post("/register", (req, res) => {
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
            //res.redirect("/");
          });
        });
      });
    }
  });
  res.redirect("/");
});

// Login

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })(req, res, next);
});
*/
