const db = require('../../database/dbConfig');

const getPosts = () => {
    return db('post as p')
            .join('ticket', function(){
                this.on(function(){
                    this.on('ticket.id', "=", "p.oneway_ticketID")
                    this.orOn('ticket.id', "=", "p.return_ticketID")
                })
            })
            .select(
                "p.id as post_id",
                "p.transport_type as transport_type",
                "p.deal_expire_date_int as deal_expire_date_int",
                "p.hasReturn as hasReturn",
                "ticket.*"
            )
}

const addPost = (post) => {
    return db('post')
            .returning('id')
            .insert(post)
            .then(ids => ({ id: ids[0] }))
}

module.exports = {
    getPosts,
    addPost
}