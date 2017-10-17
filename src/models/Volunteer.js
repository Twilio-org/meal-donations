'use strict'

const mongoose = require('mongoose')

const volunteerSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  organization: String,
  phoneNumber: String,
  email: String,
  type: String
})

module.exports = mongoose.model('Volunteer', volunteerSchema)
