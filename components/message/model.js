const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    massage: {
        type: String,
        required: true
    },
    date: Date
});

const model = mongoose.model('Message', mySchema);

module.exports = model;