const app = require('express')();
const MongoClient = require('mongodb').MongoClient;

const db = {};

require('./routes.js')(app, db);

app.listen(8000, () => {
  console.log('Listening on 8000')
});