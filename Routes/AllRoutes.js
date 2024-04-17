const express = require('express')
const router = express.Router()
const controller = require("../controller/MovieController")

router.post("/booking", controller.PostBooking)
router.get("/booking", controller.getBooking)

module.exports = router