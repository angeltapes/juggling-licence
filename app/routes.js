//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit');
const router = govukPrototypeKit.requests.setupRouter();
const myRoutesValue = 'eggplant';

// Add your routes here

//Example route for the juggling balls journey
router.post('/juggling-service/juggling-balls-router', function(request, response) {
    if (request.session.data['how-many-balls'] == "None - I cannot juggle" || request.session.data['how-many-balls'] == "None - they cannot juggle"){
        response.redirect("/juggling-service/sorry")
    } else {
        response.redirect("/juggling-service/juggling-objects")
    }
})

//Example route for the juggling balls journey
router.post('/errors/error-check', function(request, response) {
  let regExp = /^\d+(\.\d{1,2})?$/;
  let hasNumbers = regExp.test(request.session.data['check-this-number']);
  let result = hasNumbers ? "Yes" : "No";
  if (result == "Yes"){
      response.redirect("/errors/result?error=false")
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