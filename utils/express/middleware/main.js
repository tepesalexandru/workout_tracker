/// Core file for ExpressJS Middleware

// Packages
const {
  flash,
  session,
  express,
  bparser,
  passport
} = require("../../electron/packages");

// Import Express instance
const { expressApp } = require("../main");

// Root Directory
const { dir } = require("../../../index");

// Import Express router
const { router } = require("../router");

expressApp.use(
  bparser.urlencoded({
    extended: false
  })
);

expressApp.set("views", `${dir}/public/pages`);
expressApp.set("view-engine", "ejs");

// Passport middleware

expressApp.use(passport.initialize());
expressApp.use(passport.session());

// Connect Flash
expressApp.use(flash());

// Express Session
expressApp.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

expressApp.use(passport.initialize());
expressApp.use(passport.session());

expressApp.use(express.static(dir));

//expressApp.use(bparser.json());

// Use Router
expressApp.use("/", router);
