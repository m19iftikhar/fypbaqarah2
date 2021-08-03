const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
        
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    hash_password: {
        tyoe: String,
        required: true
    },
    role: {
        tyoe: String,
        enum: ['user', 'admin'],
        default: 'admin'
    },
    contactNumber: {
        tyoe: String,
    },
    picture: {
        tyoe: String,
    }
},{timestapms: true});

module.exports = mongoose.model('User');///