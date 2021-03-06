const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/warbler", {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports.User = require('./User');
module.exports.Message = require('./Message');