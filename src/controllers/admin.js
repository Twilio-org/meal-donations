'use strict'

// Create authenticated Twilio client from environment variables
const client = require('twilio')()

// Get a reference to the Airtable database for volunteers
const base = require('airtable').base(process.env.AIRTABLE_BASE_ID)

// Render broadcast page as homepage
exports.index = (request, response) => {
  response.render('admin/index')
}

// Handle request to broadcast SMS message
exports.broadcast = (request, response) => {
  let requestedType = request.body.type

  // Get a list of all volunteers and send SMS to the ones in the right
  // volunteer group
  base('Volunteers').select({
    filterByFormula: "NOT({Phone Number} = '')"  
  }).eachPage((records, fetchNextPage) => {
    // TODO - create better formula filter above to only get volunteers
    // of the requested type
    records.forEach((record) => {
      let types = record.get('Volunteer Type')
      if (types && types.length > 0 && types.indexOf(requestedType) > -1) {
        client.messages.create({
          to: record.get('Phone Number'),
          from: process.env.TWILIO_NUMBER,
          body: request.body.message
        }, (err, apiResponse) => {
          if (err) {
            console.log(err)
          } else {
            console.log('Message sent to ', record.get('Phone Number'))
          }
        })
      }
    })
    fetchNextPage()
  }, (err) => {
    if (err) {
      response.status(500)
      response.send(err)
    } else {
      // 200 OK
      response.send()
    }
  })
}
