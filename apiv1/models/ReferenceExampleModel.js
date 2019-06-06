let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ReferenceExampleSchema = new Schema({
    'functionName': String,
    'type': String,
    'info': String,
    'suggestedCourse': String,
    'code': String
});

module.exports = mongoose.model('ReferenceExample', ReferenceExampleSchema);
