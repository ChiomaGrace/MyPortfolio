const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
    firstName: {type: String, required: [true, "Please type your first name"]},
    lastName: {type: String, required: [true, "Please type your last name"]},
    emailAddress: {type: String, required: [true, "Please type your email address, so I can get back to you!"]},
    subject: {type: String},
    email: {type: String, required: [true, "Please tell me why you're reaching out :)"]}
}, {timestamps: true})

const Email = mongoose.model('Email', emailSchema)

module.exports = {
    Email: Email,
    emailSchema: emailSchema
}