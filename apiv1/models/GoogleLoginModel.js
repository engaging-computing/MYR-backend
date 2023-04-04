let mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSetting = {
    "fontSize": { type: Number, default: 12 },
    "theme": { type: String, default: "github" }
};

const GoogleAccountSchema = new Schema({
    "email": String,
    "googleId": String,
    'userSettings': UserSetting
});

module.exports = mongoose.model('GoogleLogin', GoogleAccountSchema);
