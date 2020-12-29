const db = require('../../database/dbConfig');

const addTicket = (ticket) => {
    return db('ticket')
            .returning('id')
            .insert(ticket)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    addTicket
}