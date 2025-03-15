let people = require('./people.json')
let myData = require('./my-data.csv') //these imports no longer work
module.exports = {
  people,
  myData,
  // Insert values here
  // Access these using the format {{ data['first-name'] or "First name not given" }}
 'first-name': 'Boab',
  'over-18': 'yes'
}
