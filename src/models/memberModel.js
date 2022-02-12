const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: String,
    groups: String,
    address: String,
    phoneNumber: String,
},
{ 
    timestamps: true
});

module.exports = mongoose.model("Member", memberSchema);