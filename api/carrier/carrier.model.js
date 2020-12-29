const db = require('../../database/dbConfig');

const getCarriers = () => {
    return db('carrier')
}

const addCarrier = (carrier) => {
    return db('carrier')
            .returning('id')
            .insert(carrier)
            .then(ids => ({id: ids[0]}))
}

module.exports = {
    getCarriers,
    addCarrier
}