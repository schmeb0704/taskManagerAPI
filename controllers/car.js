const Car = require("../models/Car")

const addCar = async(req, res) => {
    const car = await Car.create(req.body)

    res.status(201).json({car})
}

module.exports = {addCar}