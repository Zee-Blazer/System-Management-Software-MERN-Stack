const mongoose = require('mongoose');

const User = mongoose.model("Users", { 
    name: String,
    mobile: String,
    address: String,
    email: String
 })

module.exports = { User }
