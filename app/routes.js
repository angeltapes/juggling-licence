//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();

// Add your routes here

//An example of setting a session variable in this routes.js file
router.get('/passing-data/xtest', function(request, response) {
 request.session.data.myvar = "I set myvar using the routes file"; // access this using {{data.myvar}}
 request.session.data['my-variable']="Yes"; // alternative format, access this using {{data['my-variable']}}
 response.redirect('/passing-data/test') // this line needs to contain a redirect, otherwise you need to set request.local.data.myvar too
})

//Example route for the juggling balls journey
router.post('/juggling-service/juggling-balls-router', function(request, response) {
    if (request.session.data['how-many-balls'] == "None - I cannot juggle" || request.session.data['how-many-balls'] == "None - they cannot juggle"){
        response.redirect("/juggling-service/sorry")
    } else {
        response.redirect("/juggling-service/juggling-objects")
    }
})

//Test if an input is a number - if not, send the user back to the page and
//trigger error messages
router.post('/errors/error-check', function(request, response) {
  let regExp = /^\d+(\.\d{1,2})?$/;
  let hasNumbers = regExp.test(request.session.data['check-this-number']);
  let result = hasNumbers ? "Yes" : "No";
  if (result == "Yes"){
      response.redirect("/errors/result?error=no-errors")
  } else {
      response.redirect("/errors/input?error=not-a-number")
  }
})

// Logging session data
router.use((req, res, next) => {    
    const log = {  
      method: req.method,  
      url: req.originalUrl,  
      data: req.session.data  
    }  
    console.log(JSON.stringify(log, null, 2))  
   
  next()  
}) 