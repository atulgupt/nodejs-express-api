const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const User = new Schema({
    first_name: { type: String, trim: true, required: true },
    last_name: { type: String, trim: true },
    username: { type: String, trim: true, },
    email: { type: String, trim: true, index: { unique: true }, lowercase: true, required: true },
    password: { type: String, trim: true, required: true },
    phone_number: { type: String, trim: true },
    updated_at: { type: Date, default: null },
    created_at: { type: Date, default: Date.now }
},
    {
        collection: 'app_user'
    });

module.exports = mongoose.model('AppUser', User);
