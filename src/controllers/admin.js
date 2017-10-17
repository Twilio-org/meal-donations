'use strict'

exports.index = (request, response) => {
  response.render('admin/index')
}

exports.getVolunteers = (request, response) => {
  response.render('admin/volunteers')
}

exports.newVolunteer = (request, response) => {
  response.render('admin/volunteers_new')
}
