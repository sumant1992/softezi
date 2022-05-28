// AMOL

const express = require("express");

const userController = require("../controllers/joinContest");

const router = express.Router();

//to add a new user
router.post("/", userController.joinContest);

//to add a new user
router.post("/join", userController.joinContestById);

//find
router.get("/", userController.getAllContestInfo);

module.exports = router;