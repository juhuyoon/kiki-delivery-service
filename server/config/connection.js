const mongoose = require('mongoose');
// Remember, the name of the DB at the end of the URI is WHAT CREATES THE DATABASE IN MONGODB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1.:27017/kiki_db');

module.exports = mongoose.connection;