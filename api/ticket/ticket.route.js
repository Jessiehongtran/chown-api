const route = require('express').Router();
const ticketModel = require('./ticket.model');

//ADD TICKET
route.post('/', async (req, res) => {
    const ticket = req.body;
    try {
        const idResponse = await ticketModel.addTicket(ticket)
        res.status(200).json(idResponse)
    } catch (err){
        res.status(500).json(err.message)
    }
})

module.exports = route;