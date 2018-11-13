const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const settings = require('./settings');

const server = express();
server.use(cors());

mongoose.connect("mongodb://Lunatial:test123@ds125402.mlab.com:25402/gqlbookdb", { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.once('open', () => console.log('connected to database'));

server.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

server.listen(settings.port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${settings.port}`)
});
