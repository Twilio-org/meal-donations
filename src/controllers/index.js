'use strict'

const auth = require('http-auth')
const adminController = require('./admin')

// Basic auth with a environment-configured password
const basic = auth.connect(auth.basic({
  realm: 'Meal Donations',
}, (u, p, callback) => {
  callback(u === 'admin' && p === process.env.BASIC_PASSWORD)
}))

// Mount application routes
module.exports = (app) => {
  // Add basic auth middleware on all admin routes
  app.use('/admin\*', basic)

  // Administrative interface
  app.get('/admin', adminController.index)
}
