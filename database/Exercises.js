const mongoose = require('mongoose');


const exerciseSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    difficulty: {type: Number, required: true},
    tgtMuscle: {type: String, required: true},
    secMuscle: {type: String, required: false},
    description: {type: String, required: false},
    variations: { type: String, required: false},
    vidLink: {type: String, required: false}
});

module.exports = mongoose.model('exercises', exerciseSchema);