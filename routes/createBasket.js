// Amol
const express = require("express");

const router = express.Router();

const basketController = require("../controllers/CreateBasket");

//add/create
router.post("/", basketController.createBasket);

//find all
router.get("/", basketController.getAllBasketInfo);

//find specified
router.get("/:basketId", basketController.getBasketInfo);

//update
router.put("/:basketId", basketController.updateBasketInfo);

module.exports = router;