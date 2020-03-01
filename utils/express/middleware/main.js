/// Core file for ExpressJS Middleware

// Packages
const { flash, session, express, bparser } = require("../../electron/packages");

// Import Express instance
const { expressApp } = require("../main");

// Root Directory
const { dir } = require("../../../index");

// Import Express router
const { router } = require("../router");

// Express Session
expressApp.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Connect Flash
expressApp.use(flash());

expressApp.use(express.static(dir));

expressApp.use(
  bparser.urlencoded({
    extended: false
  })
);

expressApp.use(bparser.json());

// Use Router
expressApp.use("/", router);
