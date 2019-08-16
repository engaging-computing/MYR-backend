let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let CourseSchema = new Schema({
    'shortname': String,
    'name': String,
    'difficulty': {
        type: Number,
        enum: [0, 1, 2, 3],
    },
    'categories': [{
        type: String,
        enum: ["geometry", "transformations", "animations", "groups", "firstTimer", "teachers"],
    }],
    'description': String,
    'lessons': Array
});

module.exports = mongoose.model('Course', CourseSchema);