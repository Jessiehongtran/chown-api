const route = require('express').Router();
const carrierModel = require('./carrier.model');

//ADD CARRIER
route.post('/', async (req, res) => {
    const carrier = req.body;

    try {
        const idResponse = await carrierModel.addCarrier(carrier);
        res.status(200).json(idResponse)
    } catch (err){
        res.status(500).json(err.message)
    }
})

//GET ALL CARRIERS
route.get('/', async (req, res) => {
    try {
        const carriers = await carrierModel.getCarriers();
        res.status(200).json(carriers)
    } catch (err){
        res.status(500).json(err.message)
    }
})


module.exports = route;