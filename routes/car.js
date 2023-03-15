const express = require("express")
const router = express.Router()
const {addCar} = require("../controllers/car")

router.route("/").post(addCar)

module.exports = router