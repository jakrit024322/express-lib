const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    authos: String,
    publisher: String,
    price: Number,
    borrowstudent: Number,
    borrowteacher: Number

    // reviews field is an array field
    // reviews: [{
    //     star: Number,
    //     comment: String
    // }]
},
{ 
    timestamps: true
});

module.exports = mongoose.model("Book", bookSchema);