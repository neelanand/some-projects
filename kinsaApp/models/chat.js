var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new Schema({
    username: String,
    text: String
});

module.exports = mongoose.model('Chat', ChatSchema);
