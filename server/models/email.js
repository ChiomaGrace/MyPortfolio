const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Name is required"]}
}, {timestamps: true})

const Email = mongoose.model('Email', emailSchema)

module.exports = {
    Email: Email,
    emailSchema: emailSchema
}