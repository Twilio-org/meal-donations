'use strict'

const Volunteer = require('../models/Volunteer')

exports.getVolunteers = (request, response) => {
  response.render('admin/volunteers/index')
}

exports.newVolunteer = (request, response) => {
  response.render('admin/volunteers/volunteers_new')
}

exports.editVolunteer = (request, response) => {
  response.render('admin/volunteers/volunteers_edit')
}

exports.createVolunteerAjax = (request, response) => {
  response.render('admin/volunteers_new')
}

exports.updateVolunteerAjax = (request, response) => {
  response.render('admin/volunteers_new')
}
