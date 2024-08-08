const express = require("express");
const rootcontroller = require("../controllers/rootcontrollers");

const router = express.Router();

router.get("/", rootcontroller);

module.exports =router;