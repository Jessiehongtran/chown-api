const express = require('express');
const app = express();
const cors = require('cors');

const carrierRoute = require('./api/carrier/carrier.route');
const postRoute = require('./api/post/post.route');
const ticketRoute = require('./api/ticket/ticket.route');

app.use(express.json());
app.use(cors());
app.use('/carrier', carrierRoute);
app.use('/post', postRoute);
app.use('/ticket', ticketRoute);


module.exports = app;