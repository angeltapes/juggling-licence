//
// For guidance on how to create filters see:
// https://prototype-kit.service.gov.uk/docs/filters
//

const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

// Add your filters here

//adds commas to separate thousands, for numbers greater than 999
addFilter('addcommas', function (content) {
    return content.toLocaleString("en-US") 
  })