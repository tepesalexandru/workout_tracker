/// Core File for Packages Required
const electron = require("electron");
const path = require("path");
const url = require("url");
const mongoose = require("mongoose");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
const p_local = require("passport-local");
const bcryrpt = require("bcryptjs");

module.exports = {
  electron,
  path,
  url,
  mongoose,
  express,
  flash,
  session,
  passport,
  p_local,
  bcryrpt
};
