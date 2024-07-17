module.exports = function (router) {

  var version = "/v06/6-2-7";

    /*

    11111 UK property

    */

    var ukproperty = version + "/property/uk-property/";

    router.post(ukproperty + 'start', function (req, res) {
      res.redirect('total-property-income')
    })

    router.post(ukproperty + 'total-property-income', function (req, res) {
      if(req.session.data['uk-property-tailor-2'] == "Under £1,000"){
        res.redirect('report-income')
      }
      else{
        req.session.data['report-income'] = "I want to report my property income";
        if (req.session.data['uk-property-tailor-2'] == "Over £85,000"){
          req.session.data['income-range'] = "Over"
        }
        else{
          req.session.data['income-range'] = "Under"
        }
        res.redirect('select')
      }
    })

    router.post(ukproperty + 'report-income', function (req, res) {
      if(req.session.data['report-income'] == "I do not want to report my property income"){
        req.session.data['property-1'] = "false";
        req.session.data['property-2'] = "false";
        req.session.data['property-3'] = "false";
        res.redirect('cya')
      }
      else{
        res.redirect('select')
      }
    })

    router.post(ukproperty + 'select', function (req, res) {
      if (req.session.data['property-1'] == "Property rentals"
      && req.session.data['property-3'] == "Rent a room"){
         req.session.data['rar-rentals'] = "yes";
      }
      else{

      }
      res.redirect('cya')
    })

    router.post(ukproperty + 'cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(ukproperty + 'complete-section', function (req, res) {
      res.redirect('../task-list')
    })

    /*

    11122 Foreign property

    */

    var foreignproperty = version + "/property/foreign-property/";

    router.post(foreignproperty + 'select-country/start', function (req, res) {
      res.redirect('total-property-income')
    })

    router.post(foreignproperty + 'select-country/total-property-income', function (req, res) {
      if(req.session.data['income-range'] == "Under"){
        res.redirect('report-income')
      }
      else{
        res.redirect('select-country')
        }
    })

    router.post(foreignproperty + 'select-country/report-income', function (req, res) {
      if(req.session.data['report-income'] == "I do not want to report my property income"){
        req.session.data['property-1'] = "false";
        req.session.data['property-2'] = "false";
        req.session.data['property-3'] = "false";
        res.redirect('cya')
      }
      else{
        res.redirect('select-country')
      }
    })

    router.post(foreignproperty + 'select-country/select-country', function (req, res) {
      if (req.session.data['country-type-ahead'] == "Austria" ||
          req.session.data['country-type-ahead'] == "Belgium" ||
      req.session.data['country-type-ahead'] ==  "Bulgaria" ||
      req.session.data['country-type-ahead'] ==  "Croatia" ||
      req.session.data['country-type-ahead'] ==  "Cyprus" ||
      req.session.data['country-type-ahead'] ==  "Czech Republic" ||
      req.session.data['country-type-ahead'] ==  "Denmark" ||
      req.session.data['country-type-ahead'] ==  "European Union" ||
      req.session.data['country-type-ahead'] ==  "Estonia" ||
      req.session.data['country-type-ahead'] ==  "Finland" ||
      req.session.data['country-type-ahead'] ==  "France" ||
      req.session.data['country-type-ahead'] ==  "Germany" ||
      req.session.data['country-type-ahead'] ==  "Greece" ||
      req.session.data['country-type-ahead'] ==  "Hungary" ||
      req.session.data['country-type-ahead'] ==  "Iceland" ||
      req.session.data['country-type-ahead'] ==  "Ireland" ||
      req.session.data['country-type-ahead'] ==  "Italy" ||
      req.session.data['country-type-ahead'] ==  "Latvia" ||
      req.session.data['country-type-ahead'] ==  "Liechtenstein" ||
      req.session.data['country-type-ahead'] ==  "Lithuania" ||
      req.session.data['country-type-ahead'] ==  "Luxembourg" ||
      req.session.data['country-type-ahead'] ==  "Malta" ||
      req.session.data['country-type-ahead'] ==  "Netherlands" ||
      req.session.data['country-type-ahead'] ==  "Norway" ||
      req.session.data['country-type-ahead'] ==  "Poland" ||
      req.session.data['country-type-ahead'] ==  "Portugal" ||
      req.session.data['country-type-ahead'] ==  "Romania" ||
      req.session.data['country-type-ahead'] ==  "Slovakia" ||
      req.session.data['country-type-ahead'] ==  "Slovenia" ||
      req.session.data['country-type-ahead'] ==  "Spain" ||
      req.session.data['country-type-ahead'] ==  "Sweden" ||
      req.session.data['country-type-ahead'] ==  "Switzerland"
      ){
      req.session.data['country-in-eea'] = "true";
        res.redirect('property-type')
      }
      else{
        req.session.data['country-in-eea'] = "false";
        res.redirect('countries-list')
      }
    })

    router.post(foreignproperty + 'select-country/property-type', function (req, res) {
      res.redirect('countries-list')
    })

    router.post(foreignproperty + 'select-country/select-country2', function (req, res) {
      if (req.session.data['country-type-ahead2'] == "Austria" ||
          req.session.data['country-type-ahead2'] == "Belgium" ||
      req.session.data['country-type-ahead2'] ==  "Bulgaria" ||
      req.session.data['country-type-ahead2'] ==  "Croatia" ||
      req.session.data['country-type-ahead2'] ==  "Cyprus" ||
      req.session.data['country-type-ahead2'] ==  "Czech Republic" ||
      req.session.data['country-type-ahead2'] ==  "Denmark" ||
      req.session.data['country-type-ahead2'] ==  "European Union" ||
      req.session.data['country-type-ahead2'] ==  "Estonia" ||
      req.session.data['country-type-ahead2'] ==  "Finland" ||
      req.session.data['country-type-ahead2'] ==  "France" ||
      req.session.data['country-type-ahead2'] ==  "Germany" ||
      req.session.data['country-type-ahead2'] ==  "Greece" ||
      req.session.data['country-type-ahead2'] ==  "Hungary" ||
      req.session.data['country-type-ahead2'] ==  "Iceland" ||
      req.session.data['country-type-ahead2'] ==  "Ireland" ||
      req.session.data['country-type-ahead2'] ==  "Italy" ||
      req.session.data['country-type-ahead2'] ==  "Latvia" ||
      req.session.data['country-type-ahead2'] ==  "Liechtenstein" ||
      req.session.data['country-type-ahead2'] ==  "Lithuania" ||
      req.session.data['country-type-ahead2'] ==  "Luxembourg" ||
      req.session.data['country-type-ahead2'] ==  "Malta" ||
      req.session.data['country-type-ahead2'] ==  "Netherlands" ||
      req.session.data['country-type-ahead2'] ==  "Norway" ||
      req.session.data['country-type-ahead2'] ==  "Poland" ||
      req.session.data['country-type-ahead2'] ==  "Portugal" ||
      req.session.data['country-type-ahead2'] ==  "Romania" ||
      req.session.data['country-type-ahead2'] ==  "Slovakia" ||
      req.session.data['country-type-ahead2'] ==  "Slovenia" ||
      req.session.data['country-type-ahead2'] ==  "Spain" ||
      req.session.data['country-type-ahead2'] ==  "Sweden" ||
      req.session.data['country-type-ahead2'] ==  "Switzerland"
      ){
      req.session.data['country-in-eea2'] = "true";
        res.redirect('property-type2')
      }
      else{
        req.session.data['country-in-eea2'] = "false";
        res.redirect('countries-list2')
      }
    })

    router.post(foreignproperty + 'select-country/property-type2', function (req, res) {
      res.redirect('countries-list2')
    })

    router.post(foreignproperty + 'select-country/countries-list', function (req, res) {
      res.redirect('pia-yes-no')
    })

    router.post(foreignproperty + 'select-country/countries-list2', function (req, res) {
      res.redirect('pia-yes-no')
    })

     router.post(foreignproperty + 'select-country/pia-yes-no', function (req, res) {
          res.redirect('cya')
     })



    router.post(foreignproperty + 'select-country/cya', function (req, res) {
      res.redirect('complete-section')
    })


    router.post(foreignproperty + 'select-country/complete-section', function (req, res) {
      res.redirect('../../task-list')
    })

    /*

    FHL, EEA only

    */

    var fpfhl = version + "/property/foreign-property/furnished-holiday-lettings/";

    router.post(fpfhl + 'about/foreign-tax', function (req, res) {
      res.redirect('ftcr')
    })

    router.post(fpfhl + 'about/ftcr', function (req, res) {
      if (req.session.data['fhl-ftcr'] == "Yes"){
        res.redirect('ftcr-amount')
      }
      else{
        res.redirect('cya')
      }
    })

    router.post(fpfhl + 'about/ftcr-amount', function (req, res) {
      res.redirect('cya')
    })

    router.post(fpfhl + 'about/cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(fpfhl + 'about/complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })

    /*

    Foreign FHL, EEA only - income

    */

    router.post(fpfhl + 'income/fhl-start2', function (req, res) {
      res.redirect('fhl-income')
    })

    router.post(fpfhl + 'income/fhl-income', function (req, res) {
      res.redirect('cya')
  })


  router.post(fpfhl + 'income/fhl-start-2', function (req, res) {
    if(req.session.data['rar-or-expenses'] == "Rent a room relief"){
      if(req.session.data['do-you-live-in-fhl'] == "Yes"){
        res.redirect('fhl-income-main-home')
      }
      else{
        res.redirect('fhl-income')
      }
    }
    else{
      res.redirect('fhl-non-resident-landlord')
    }

  })

  // Non-resident landlord Y/N
  router.post(fpfhl + 'income/fhl-non-resident-landlord', function (req, res) {
      if (req.session.data['fhl-non-resident-landlord'] == "Yes") {
      res.redirect('fhl-nrl-tax-yn')
      }
      else{
          res.redirect('fhl-income')
      }
  })

  // Non-resident landlord TAX Y/N
  router.post(fpfhl + 'income/fhl-nrl-tax-yn', function (req, res) {
          res.redirect('fhl-income')
  })

  router.post(fpfhl + 'income/fhl-income', function (req, res) {
    res.redirect('cya')
  })

  router.post(fpfhl + 'income/cya', function (req, res) {
      res.redirect('complete-section')
  })

  router.post(fpfhl + 'income/complete-section', function (req, res) {
    res.redirect(version + '/property/task-list')
  })

  // === === ===
  //
  // Expenses
  //

    router.post(fpfhl + 'expenses/fhl-start-3', function (req, res) {
    if (req.session.data['income-range'] == "Over") {
      res.redirect('fhl-running-costs')
    } else
        // If NO - go to Individual expenses
    {
        res.redirect('fhl-consolidated-expenses')
    }
  })

  // Consolidated expenses
  router.post(fpfhl + 'expenses/fhl-consolidated-expenses', function (req, res) {
          if (req.session.data['fhl-consolidated-expenses-yn'] == "Yes") {
              res.redirect('fhl-cya-expenses')
          } else
              // If NO - go to Individual expenses
          {
              res.redirect('fhl-running-costs')
          }

  })

  // Running costs
  router.post(fpfhl + 'expenses/fhl-running-costs', function (req, res) {
          res.redirect('fhl-rent-repairs-insurance')
  })

  // Repairs and maintenance
  router.post(fpfhl + 'expenses/fhl-rent-repairs-insurance', function (req, res) {
          res.redirect('fhl-loan-interest')
  })

  // Financial costs
  router.post(fpfhl + 'expenses/fhl-loan-interest', function (req, res) {
          res.redirect('fhl-legal-management-fees')
  })

  // Professional fees
  router.post(fpfhl + 'expenses/fhl-legal-management-fees', function (req, res) {
          res.redirect('fhl-services-costs')
  })

  // Services costs
  router.post(fpfhl + 'expenses/fhl-services-costs', function (req, res) {
          res.redirect('fhl-travel-costs')
  })

  // Travel costs
  router.post(fpfhl + 'expenses/fhl-travel-costs', function (req, res) {
          res.redirect('fhl-other-expenses')
  })

  // Other expenses
  router.post(fpfhl + 'expenses/fhl-other-expenses', function (req, res) {
      res.redirect('fhl-cya-expenses')
  })

      // Expenses CYA
      router.post(fpfhl + 'expenses/fhl-cya-expenses', function (req, res) {
          res.redirect('fhl-expenses-complete-section')
      })

              // Expenses complete section
                  router.post(fpfhl + 'expenses/fhl-expenses-complete-section', function (req, res) {
                  res.redirect(version + '/property/task-list')
              })

  // === === ===
  //
  // Allowances
  //

  router.post(fpfhl + 'allowances/fhl-start-4', function (req, res) {
      if (req.session.data['opr-account-method'] == "Traditional accounting"){
        res.redirect('fhl-annual-investment-allowance')
      }
      else{
        res.redirect('fhl-capital-cash-car-yn')
      }
  })

    // Annual investment allowance
    router.post(fpfhl + 'allowances/fhl-annual-investment-allowance', function (req, res) {
      res.redirect('fhl-electric-charge-point-combined')
    })

  // Electric charge point
  router.post(fpfhl + 'allowances/fhl-electric-charge-point-combined', function (req, res) {
          res.redirect('fhl-zero-emission-allowance')
  })

  // Zero-emission allowance
  router.post(fpfhl + 'allowances/fhl-zero-emission-allowance', function (req, res) {
          res.redirect('fhl-business-premises-renovation-allowance')
  })

  // Business premises renovation allowance
  router.post(fpfhl + 'allowances/fhl-business-premises-renovation-allowance', function (req, res) {
    if (req.session.data['fhl-travel-costs'] > 0){
      res.redirect('fhl-cya-allowances')
    }
    else{
      res.redirect('fhl-other-capital-allowance')
    }

  })

  // Capital cash car
  router.post(fpfhl + 'allowances/fhl-capital-cash-car-yn', function (req, res) {
    res.redirect('fhl-cya-allowances')
  })

  // Other capital allowance
  router.post(fpfhl + 'allowances/fhl-other-capital-allowance', function (req, res) {
    res.redirect('fhl-cya-allowances')
  })

  // Allowances CYA
  router.post(fpfhl + 'allowances/fhl-cya-allowances', function (req, res) {
      res.redirect('fhl-allowances-complete-section')
  })

  // Allowances complete section
  router.post(fpfhl + 'allowances/fhl-allowances-complete-section', function (req, res) {
      res.redirect(version + '/property/task-list')
  })

  // === === ===
  // Adjustments
  //

  router.post(fpfhl + 'adjustments/fhl-start-5', function (req, res) {
      res.redirect('fhl-balancing-charge-combined')
  })

  router.post(fpfhl + 'adjustments/fhl-balancing-charge-combined', function (req, res) {
              // If YES -
              if (req.session.data['pia-yes-no'] == "Yes") {
                res.redirect('fhl-yes-to-pia')
            }
            else
                // If NO -
            {
                res.redirect('fhl-private-use')
            }
})

  router.post(fpfhl + 'adjustments/fhl-private-use', function (req, res) {
          res.redirect('fhl-business-premises-renovation-allowance-balancing-charge')
  })

  // FHL How much PIA does you/your client want to claim? Estela G 08-04-2023
  router.post(fpfhl + 'adjustments/fhl-yes-to-pia', function (req, res) {
    res.redirect('fhl-business-premises-renovation-allowance-balancing-charge')
})

   router.get(fpfhl + 'adjustments/fhl-income-allowance-combined', function (req, res) {
      res.render('fhl-income-allowance-combined', {})
  })

  router.post(fpfhl + 'adjustments/fhl-income-allowance-combined', function (req, res) {
      // Just come from CYA?
      if (req.session.data['camefromcheckanswersfhl'] == "true") {
          req.session.data['camefromcheckanswersfhl'] = "false";
          res.redirect('opr-cya')

      // IF YES to CYA?
      }
      else if (req.session.data['fhl-income-allowance-combined-yn'] == "Yes") {
               res.redirect('fhl-start-5')
      }
      else if (req.session.data['fhl-income-allowance-combined-yn'] == "No") {
               res.redirect('fhl-start-5')
      }
      else {
               res.redirect('fhl-start-5')
      }

  })

  // Balancing charge
  router.post(fpfhl + 'adjustments/fhl-balancing-charge-combined', function (req, res) {
          res.redirect('fhl-business-premises-renovation-allowance-balancing-charge')
  })

  // Business premises renovation allowance balancing charge
  router.post(fpfhl + 'adjustments/fhl-business-premises-renovation-allowance-balancing-charge', function (req, res) {
          res.redirect('fhl-period-of-grace-yn')
  })

  // Period of grace
  router.post(fpfhl + 'adjustments/fhl-period-of-grace-yn', function (req, res) {
          res.redirect('cya')
  })

  router.post(fpfhl + 'adjustments/cya', function (req, res) {
      res.redirect('complete-section')
  })

  router.post(fpfhl + 'adjustments/complete-section', function (req, res) {
      res.redirect(version + '/property/task-list')
  })

  // Adjusted profit/loss
  router.post(fpfhl + 'adjustments/fhl-adjusted-profit', function (req, res) {
      res.redirect('fhl-complete-section')
  })

  // Have you finished?
  router.get(fpfhl + 'adjustments/fhl-complete-section', function (req, res) {
      res.render('fhl-complete-section', {})
  })

  router.post(fpfhl + 'adjustments/fhl-complete-section', function (req, res) {

      // if NOT FINISHED go back
      if (req.session.data['fhl-complete-section'] == 'no') {
          req.session.data.fhlComplete = 'NotComplete'
          res.redirect('../../property-overview')
      } else
          // if FINISHED goto summary
      {
          req.session.data.fhlComplete = 'YesComplete';
          res.redirect('../../property-overview')
      }

  })

  /*


  FINISHED FOREIGN FHL


  */

  /*

  'Spain' property rentals

  */

/*

Spain Rentals - about

*/

var fpspr = version + "/property/foreign-property/spain-property-rentals/";

router.post(fpspr + 'about/foreign-tax', function (req, res) {
  res.redirect('ftcr')
})

router.post(fpspr + 'about/ftcr', function (req, res) {
  if (req.session.data['usa-ftcr'] == "Yes"){
    res.redirect('ftcr-amount')
  }
  else{
    res.redirect('cya')
  }
})

router.post(fpspr + 'about/ftcr-amount', function (req, res) {
  res.redirect('cya')
})

router.post(fpspr + 'about/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpspr + 'about/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

// router.post(fpspr + 'about/start', function (req, res) {
//   res.redirect('pia-yes-no')
// })

// router.post(fpspr + 'about/pia-yes-no', function (req, res) {
//   res.redirect('cya')
// })

router.post(fpspr + 'about/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpspr + 'about/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

Spain Rentals - Income

*/

router.post(fpspr + 'income/start', function (req, res) {
  res.redirect('non-resident-landlord')
})

router.post(fpspr + 'income/non-resident-landlord', function (req, res) {
  if(req.session.data['opr-nrl-yn'] =="Yes"){
    res.redirect('opr-nrl-tax-yn')
  }
  else{
    res.redirect('opr-income')
  }

})

router.post(fpspr + 'income/opr-nrl-tax-yn', function (req, res) {
  res.redirect('opr-income')
})

router.post(fpspr + 'income/opr-income', function (req, res) {
  res.redirect('opr-userpremiums-grant-lease-yn')
})

router.post(fpspr + 'income/opr-userpremiums-grant-lease-yn', function (req, res) {
  if(req.session.data['opr-userpremiums-grant-lease-yn'] == 'No'){
    res.redirect('opr-other-income')
  }
  else{
    res.redirect('opr-userpremiums-selfcalculation-yn')
  }

})

router.post(fpspr + 'income/opr-userpremiums-selfcalculation-yn', function (req, res) {
  if(req.session.data['opr-userpremiums-selfcalculation-yn'] == 'No'){
    res.redirect('opr-what-is-premium')
  }
  else{
    res.redirect('opr-other-income')
  }
})

router.post(fpspr + 'income/opr-what-is-premium', function (req, res) {
  res.redirect('opr-12-months')
})

router.post(fpspr + 'income/opr-12-months', function (req, res) {
  res.redirect('opr-premium-lease-amount')
})

router.post(fpspr + 'income/opr-premium-lease-amount', function (req, res) {
  res.redirect('opr-other-income')
})

router.post(fpspr + 'income/opr-reverse-premiums', function (req, res) {
  res.redirect('opr-other-income')
})

router.post(fpspr + 'income/opr-other-income', function (req, res) {
  res.redirect('cya')
})

router.post(fpspr + 'income/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpspr + 'income/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

Spain Rentals - Expenses

*/

router.post(fpspr + 'expenses/start', function (req, res) {

    res.redirect('opr-consolidated-expenses')

})

router.post(fpspr + 'expenses/opr-consolidated-expenses', function (req, res) {
  if(req.session.data['opr-consolidated-expenses-yn'] == "Yes"){
    res.redirect('cya')
  }
  else{
    res.redirect('opr-running-costs')
  }
})

router.post(fpspr + 'expenses/opr-running-costs', function (req, res) {
  res.redirect('opr-repairs-maintenance')
})

router.post(fpspr + 'expenses/opr-repairs-maintenance', function (req, res) {
  res.redirect('opr-financial-costs')
})

router.post(fpspr + 'expenses/opr-financial-costs', function (req, res) {
  res.redirect('opr-professional-fees')
})

router.post(fpspr + 'expenses/opr-professional-fees', function (req, res) {
  res.redirect('opr-services-costs')
})

router.post(fpspr + 'expenses/opr-services-costs', function (req, res) {
  res.redirect('opr-travel-costs')
})

router.post(fpspr + 'expenses/opr-travel-costs', function (req, res) {
  res.redirect('opr-other-expenses')
})

router.post(fpspr + 'expenses/opr-other-expenses', function (req, res) {
  res.redirect('cya')
})

router.post(fpspr + 'expenses/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpspr + 'expenses/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

Spain Rentals - Allowances

*/


router.post(fpspr + 'allowances/start', function (req, res) {
  if (req.session.data['opr-account-method'] == 'Traditional accounting') {
    res.redirect('opr-annual-investment-allowance')
  } else {
    res.redirect('opr-capital-cash-car-yn')
  }
})

router.post(fpspr + 'allowances/opr-capital-cash-car-yn', function (req, res) {
  res.redirect('opr-other-capital-allowance')
})

router.post(fpspr + 'allowances/opr-annual-investment-allowance', function (req, res) {
  res.redirect('opr-electric-charge-point-allowance')
})

router.post(fpspr + 'allowances/opr-electric-charge-point-allowance', function (req, res) {
  res.redirect('opr-zero-emission-car-allowance')
})

router.post(fpspr + 'allowances/opr-zero-emission-car-allowance', function (req, res) {
  res.redirect('opr-zero-emission-goods-vehicle-allowance')
})

router.post(fpspr + 'allowances/opr-zero-emission-goods-vehicle-allowance', function (req, res) {
  res.redirect('opr-business-premises-renovation-allowance')
})

router.post(fpspr + 'allowances/opr-business-premises-renovation-allowance', function (req, res) {
  res.redirect('opr-replacing-domestic-goods-allowance')
})

router.post(fpspr + 'allowances/opr-replacing-domestic-goods-allowance', function (req, res) {
  res.redirect('opr-other-capital-allowance')
})

router.post(fpspr + 'allowances/opr-other-capital-allowance', function (req, res) {
  res.redirect('cya')
})

router.post(fpspr + 'allowances/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpspr + 'allowances/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

Spain Rentals - Adjustments

*/

router.post(fpspr + 'adjustments/start', function (req, res) {
    res.redirect('opr-private-use')
})

router.post(fpspr + 'adjustments/opr-private-use', function (req, res) {
  res.redirect('opr-balancing-charge')
})

router.post(fpspr + 'adjustments/opr-balancing-charge', function (req, res) {
  if(req.session.data['pia-yes-no'] == "Yes"){
    res.redirect('opr-yes-to-pia')
  }
  else
  {
    res.redirect('opr-yes-to-pia')
  }
})

router.post(fpspr + 'adjustments/opr-yes-to-pia', function (req, res) {
  res.redirect('opr-business-premises-renovation-allowance-balancing-charge')
})

router.post(fpspr + 'adjustments/opr-business-premises-renovation-allowance-balancing-charge', function (req, res) {
  res.redirect('opr-residential-financial-cost')
})

router.post(fpspr + 'adjustments/opr-residential-financial-cost', function (req, res) {
  res.redirect('opr-residential-financial-cost-CF')
})

router.post(fpspr + 'adjustments/opr-residential-financial-cost-CF', function (req, res) {
  res.redirect('cya')
})

router.post(fpspr + 'adjustments/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpspr + 'adjustments/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})
 /*

 End of 'Spain' property rentals

 */

 /*

USA Rentals

*/

/*

USA Rentals - about

*/

var fpusapr = version + "/property/foreign-property/usa-property-rentals/";

router.post(fpusapr + 'about/foreign-tax', function (req, res) {
  res.redirect('ftcr')
})

router.post(fpusapr + 'about/ftcr', function (req, res) {
  if (req.session.data['ftcr'] == "Yes"){
    res.redirect('ftcr-amount')
  }
  else{
    res.redirect('cya')
  }
})

router.post(fpusapr + 'about/ftcr-amount', function (req, res) {
  res.redirect('cya')
})

router.post(fpusapr + 'about/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpusapr + 'about/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

router.post(fpusapr + 'about/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpusapr + 'about/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

USA Rentals - Income

*/

router.post(fpusapr + 'income/start', function (req, res) {
  res.redirect('opr-income')
})

router.post(fpusapr + 'income/non-resident-landlord', function (req, res) {
  if(req.session.data['opr-nrl-yn'] =="Yes"){
    res.redirect('opr-nrl-tax-yn')
  }
  else{
    res.redirect('opr-income')
  }

})

router.post(fpusapr + 'income/opr-nrl-tax-yn', function (req, res) {
  res.redirect('opr-income')
})

router.post(fpusapr + 'income/opr-income', function (req, res) {
  res.redirect('opr-userpremiums-grant-lease-yn')
})

router.post(fpusapr + 'income/opr-userpremiums-grant-lease-yn', function (req, res) {
  if(req.session.data['opr-userpremiums-grant-lease-yn'] == 'No'){
    res.redirect('opr-other-income')
  }
  else{
    res.redirect('opr-userpremiums-selfcalculation-yn')
  }

})

router.post(fpusapr + 'income/opr-userpremiums-selfcalculation-yn', function (req, res) {
  if(req.session.data['opr-userpremiums-selfcalculation-yn'] == 'No'){
    res.redirect('opr-what-is-premium')
  }
  else{
    res.redirect('opr-other-income')
  }
})

router.post(fpusapr + 'income/opr-what-is-premium', function (req, res) {
  res.redirect('opr-12-months')
})

router.post(fpusapr + 'income/opr-12-months', function (req, res) {
  res.redirect('opr-premium-lease-amount')
})

router.post(fpusapr + 'income/opr-premium-lease-amount', function (req, res) {
  res.redirect('opr-other-income')
})

router.post(fpusapr + 'income/opr-reverse-premiums', function (req, res) {
  res.redirect('opr-other-income')
})

router.post(fpusapr + 'income/opr-other-income', function (req, res) {
  res.redirect('cya')
})

router.post(fpusapr + 'income/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpusapr + 'income/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

USA Rentals - Expenses

*/

router.post(fpusapr + 'expenses/start', function (req, res) {
  res.redirect('opr-consolidated-expenses')

})

router.post(fpusapr + 'expenses/opr-consolidated-expenses', function (req, res) {
  if(req.session.data['opr-consolidated-expenses-yn'] == "Yes"){
    res.redirect('cya')
  }
  else{
    res.redirect('opr-running-costs')
  }
})

router.post(fpusapr + 'expenses/opr-running-costs', function (req, res) {
  res.redirect('opr-repairs-maintenance')
})

router.post(fpusapr + 'expenses/opr-repairs-maintenance', function (req, res) {
  res.redirect('opr-financial-costs')
})

router.post(fpusapr + 'expenses/opr-financial-costs', function (req, res) {
  res.redirect('opr-professional-fees')
})

router.post(fpusapr + 'expenses/opr-professional-fees', function (req, res) {
  res.redirect('opr-services-costs')
})

router.post(fpusapr + 'expenses/opr-services-costs', function (req, res) {
  res.redirect('opr-travel-costs')
})

router.post(fpusapr + 'expenses/opr-travel-costs', function (req, res) {
  res.redirect('opr-other-expenses')
})

router.post(fpusapr + 'expenses/opr-other-expenses', function (req, res) {
  res.redirect('cya')
})

router.post(fpusapr + 'expenses/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpusapr + 'expenses/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

USA Rentals - Allowances

*/


//check logic ...
router.post(fpusapr + 'allowances/start', function (req, res) {
  if (req.session.data['opr-account-method']== 'Traditional accounting') {
    res.redirect('opr-annual-investment-allowance')
  } else {
    res.redirect('opr-capital-cash-car-yn')
  }
})

router.post(fpusapr + 'allowances/opr-capital-cash-car-yn', function (req, res) {
  res.redirect('opr-other-capital-allowance')
})

router.post(fpusapr + 'allowances/opr-annual-investment-allowance', function (req, res) {
  res.redirect('opr-electric-charge-point-allowance')
})

router.post(fpusapr + 'allowances/opr-electric-charge-point-allowance', function (req, res) {
  res.redirect('opr-zero-emission-car-allowance')
})

router.post(fpusapr + 'allowances/opr-zero-emission-car-allowance', function (req, res) {
  res.redirect('opr-zero-emission-goods-vehicle-allowance')
})

router.post(fpusapr + 'allowances/opr-zero-emission-goods-vehicle-allowance', function (req, res) {
  res.redirect('opr-business-premises-renovation-allowance')
})

router.post(fpusapr + 'allowances/opr-business-premises-renovation-allowance', function (req, res) {
  res.redirect('opr-replacing-domestic-goods-allowance')
})

router.post(fpusapr + 'allowances/opr-replacing-domestic-goods-allowance', function (req, res) {
  res.redirect('opr-other-capital-allowance')
})

router.post(fpusapr + 'allowances/opr-other-capital-allowance', function (req, res) {
  res.redirect('cya')
})

router.post(fpusapr + 'allowances/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpusapr + 'allowances/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

USA Rentals - Adjustments

*/

router.post(fpusapr + 'adjustments/start', function (req, res) {
    res.redirect('opr-private-use')
})

router.post(fpusapr + 'adjustments/opr-private-use', function (req, res) {
  res.redirect('opr-balancing-charge')
})

router.post(fpusapr + 'adjustments/opr-balancing-charge', function (req, res) {
  if(req.session.data['pia-yes-no'] == "Yes"){
    res.redirect('opr-yes-to-pia')
  }
  else
  {
    res.redirect('opr-yes-to-pia')
  }
})

router.post(fpusapr + 'adjustments/opr-yes-to-pia', function (req, res) {
  res.redirect('opr-business-premises-renovation-allowance-balancing-charge')
})

router.post(fpusapr + 'adjustments/opr-business-premises-renovation-allowance-balancing-charge', function (req, res) {
  res.redirect('opr-residential-financial-cost')
})

router.post(fpusapr + 'adjustments/opr-residential-financial-cost', function (req, res) {
  res.redirect('opr-residential-financial-cost-CF')
})

router.post(fpusapr + 'adjustments/opr-residential-financial-cost-CF', function (req, res) {
  res.redirect('cya')
})

router.post(fpusapr + 'adjustments/cya', function (req, res) {
  res.redirect('complete-section')
})

router.post(fpusapr + 'adjustments/complete-section', function (req, res) {
  res.redirect('../../../task-list')
})

/*

End of USA rentals

*/


    /*

    22222 Rentals

    */

    /*

    Rentals - about

    */

    var prukabout = version + "/property/property-rentals/uk/about/";

    router.post(prukabout + 'start', function (req, res) {
      res.redirect('pia-yes-no')
    })

    router.post(prukabout + 'pia-yes-no', function (req, res) {
      res.redirect('cya')
    })

    router.post(prukabout + 'cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(prukabout + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })

    /*

    Rentals - Income

    */

    var prukincome = version + "/property/property-rentals/uk/income/";

    router.post(prukincome + 'start', function (req, res) {
      res.redirect('non-resident-landlord')
    })

    router.post(prukincome + 'non-resident-landlord', function (req, res) {
      if(req.session.data['opr-nrl-yn'] =="Yes"){
        res.redirect('opr-nrl-tax-yn')
      }
      else{
        res.redirect('opr-income')
      }

    })

    router.post(prukincome + 'opr-nrl-tax-yn', function (req, res) {
      res.redirect('opr-income')
    })

    router.post(prukincome + 'opr-income', function (req, res) {
      res.redirect('opr-userpremiums-grant-lease-yn')
    })

    router.post(prukincome + 'opr-userpremiums-grant-lease-yn', function (req, res) {
      if(req.session.data['opr-userpremiums-grant-lease-yn'] == 'No'){
        res.redirect('opr-other-income')
      }
      else{
        res.redirect('opr-userpremiums-selfcalculation-yn')
      }

    })

    router.post(prukincome + 'opr-userpremiums-selfcalculation-yn', function (req, res) {
      if(req.session.data['opr-userpremiums-selfcalculation-yn'] == 'No'){
        res.redirect('opr-what-is-premium')
      }
      else{
        res.redirect('opr-other-income')
      }
    })

    router.post(prukincome + 'opr-what-is-premium', function (req, res) {
      res.redirect('opr-12-months')
    })

    router.post(prukincome + 'opr-12-months', function (req, res) {
      res.redirect('opr-premium-lease-amount')
    })

    router.post(prukincome + 'opr-premium-lease-amount', function (req, res) {
      res.redirect('opr-other-income')
    })

    router.post(prukincome + 'opr-reverse-premiums', function (req, res) {
      res.redirect('opr-other-income')
    })

    router.post(prukincome + 'opr-other-income', function (req, res) {
      res.redirect('cya')
    })

    router.post(prukincome + 'cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(prukincome + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })

    /*

    Rentals - Expenses

    */

    var prukexpenses = version + "/property/property-rentals/uk/expenses/";

    router.post(prukexpenses + 'start', function (req, res) {
      if (req.session.data['income-range'] == "Over"){
        res.redirect('opr-running-costs')
      }
      else{
        res.redirect('opr-consolidated-expenses')
      }
    })

    router.post(prukexpenses + 'opr-consolidated-expenses', function (req, res) {
      if(req.session.data['opr-consolidated-expenses-yn'] == "Yes"){
        res.redirect('cya')
      }
      else{
        res.redirect('opr-running-costs')
      }
    })

    router.post(prukexpenses + 'opr-running-costs', function (req, res) {
      res.redirect('opr-repairs-maintenance')
    })

    router.post(prukexpenses + 'opr-repairs-maintenance', function (req, res) {
      res.redirect('opr-financial-costs')
    })

    router.post(prukexpenses + 'opr-financial-costs', function (req, res) {
      res.redirect('opr-professional-fees')
    })

    router.post(prukexpenses + 'opr-professional-fees', function (req, res) {
      res.redirect('opr-services-costs')
    })

    router.post(prukexpenses + 'opr-services-costs', function (req, res) {
      res.redirect('opr-travel-costs')
    })

    router.post(prukexpenses + 'opr-travel-costs', function (req, res) {
      res.redirect('opr-other-expenses')
    })

    router.post(prukexpenses + 'opr-other-expenses', function (req, res) {
      res.redirect('cya')
    })

    router.post(prukexpenses + 'cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(prukexpenses + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })

    /*

    Rentals - Allowances

    */


    var prukallowances = version + "/property/property-rentals/uk/allowances/";

    //check logic ...
    router.post(prukallowances + 'start', function (req, res) {
      if (req.session.data['opr-account-method']== 'Traditional accounting') {
        res.redirect('opr-annual-investment-allowance')
      } else {
        res.redirect('opr-capital-cash-car-yn')
      }
    })

    router.post(prukallowances + 'opr-capital-cash-car-yn', function (req, res) {
      res.redirect('cya')
    })

    router.post(prukallowances + 'opr-annual-investment-allowance', function (req, res) {
      res.redirect('opr-electric-charge-point-allowance')
    })

    router.post(prukallowances + 'opr-electric-charge-point-allowance', function (req, res) {
      res.redirect('opr-zero-emission-car-allowance')
    })

    router.post(prukallowances + 'opr-zero-emission-car-allowance', function (req, res) {
      res.redirect('opr-zero-emission-goods-vehicle-allowance')
    })

    router.post(prukallowances + 'opr-zero-emission-goods-vehicle-allowance', function (req, res) {
      res.redirect('opr-business-premises-renovation-allowance')
    })

    router.post(prukallowances + 'opr-business-premises-renovation-allowance', function (req, res) {
      res.redirect('opr-replacing-domestic-goods-allowance')
    })

    router.post(prukallowances + 'opr-replacing-domestic-goods-allowance', function (req, res) {
      res.redirect('opr-other-capital-allowance')
    })

    router.post(prukallowances + 'opr-other-capital-allowance', function (req, res) {
      res.redirect('cya')
    })

    router.post(prukallowances + 'cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(prukallowances + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })

    /*

    Rentals - SBA

    */

    var thisPage = "start";

    var pruksba = version + "/property/property-rentals/uk/sba/";

    router.post(pruksba + 'start', function (req, res) {
      res.redirect('empty-list')
    })

    router.post(pruksba + 'empty-list', function (req, res) {
      res.redirect('start-date')
    })

    router.post(pruksba + 'start-date', function (req, res) {
      res.redirect('qualifying-amount')
      })

      router.post(pruksba + 'qualifying-amount', function (req, res) {
        res.redirect('claim-value')
        })

        router.post(pruksba + 'claim-value', function (req, res) {
          res.redirect('address')
          })

          router.post(pruksba + 'address', function (req, res) {
            res.redirect('claim-check-answers')
            })

            router.post(pruksba + 'claim-check-answers', function (req, res) {
              res.redirect('list-1-added')
              })

              router.post(pruksba + 'list-1-added', function (req, res) {
                res.redirect('complete-section')
                })


    router.post(pruksba + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })

    /*

    Rentals - ESBA

    */

    var prukesba = version + "/property/property-rentals/uk/esba/";


    router.post(prukesba + 'start', function (req, res) {
      res.redirect('empty-list')
    })

    router.post(prukesba + 'empty-list', function (req, res) {
      res.redirect('start-date')
    })

    router.post(prukesba + 'start-date', function (req, res) {
      res.redirect('qualifying-amount')
      })

      router.post(prukesba + 'qualifying-amount', function (req, res) {
        res.redirect('claim-value')
        })

        router.post(prukesba + 'claim-value', function (req, res) {
          res.redirect('address')
          })

          router.post(prukesba + 'address', function (req, res) {
            res.redirect('claim-check-answers')
            })

            router.post(prukesba + 'claim-check-answers', function (req, res) {
              res.redirect('list-1-added')
              })

              router.post(prukesba + 'list-1-added', function (req, res) {
                res.redirect('complete-section')
                })


    router.post(prukesba + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })


    /*

    Rentals - Adjustments

    */


    var prukadjustments = version + "/property/property-rentals/uk/adjustments/";

    router.post(prukadjustments + 'start', function (req, res) {
        res.redirect('opr-private-use')
    })

    router.post(prukadjustments + 'opr-private-use', function (req, res) {
      res.redirect('opr-balancing-charge')
    })

    router.post(prukadjustments + 'opr-balancing-charge', function (req, res) {
      if(req.session.data['pia-yes-no'] == "Yes"){
        res.redirect('opr-yes-to-pia')
      }
      else
      {
        res.redirect('opr-business-premises-renovation-allowance-balancing-charge')
      }
    })

    router.post(prukadjustments + 'opr-yes-to-pia', function (req, res) {
      res.redirect('opr-business-premises-renovation-allowance-balancing-charge')
    })

    router.post(prukadjustments + 'opr-business-premises-renovation-allowance-balancing-charge', function (req, res) {
      res.redirect('opr-residential-financial-cost')
    })

    router.post(prukadjustments + 'opr-residential-financial-cost', function (req, res) {
      res.redirect('opr-residential-financial-cost-CF')
    })

    router.post(prukadjustments + 'opr-residential-financial-cost-CF', function (req, res) {
      res.redirect('cya')
    })

    router.post(prukadjustments + 'cya', function (req, res) {
      res.redirect('complete-section')
    })

    router.post(prukadjustments + 'complete-section', function (req, res) {
      res.redirect('../../../task-list')
    })


    // === === === === === === === === ===
    // === === === === === === === === ===
    // === === === === === === === === ===
    // Property
    // Furnished holiday lettings UK
    // 33333 FHLs
    //
    //  ______ _    _ _
    // |  ____| |  | | |
    // | |__  | |__| | |       ___
    // |  __| |  __  | |      / __|
    // | |    | |  | | |____  \__ \
    // |_|    |_|  |_|______| |___/
    //
    // === === === === === === === === ===


  /*

  About

  */

  var fhlukabout = version + "/property/furnished-holiday-lettings/uk/about/";

  router.post(fhlukabout + 'fhl-start-1', function (req, res) {
    res.redirect('more-than-one-fhl')
})

  router.post(fhlukabout + 'more-than-one-fhl', function (req, res) {
    if (req.session.data['more-than-one-fhl'] == "Yes"){
      res.redirect('do-you-live-in-fhl')
    }
    else {
      res.redirect('this-fhl')
    }
  })

  //Do you live in one of your FHLs as your main residence?
  router.post(fhlukabout + 'do-you-live-in-fhl', function (req, res) {
    if (req.session.data['do-you-live-in-fhl'] == "Yes"){
      res.redirect('jointly-let')
    }
    else {
      res.redirect('pia-yes-no')
    }
  })

      //Do you live in this FHL as your main residence?
      router.post(fhlukabout + 'this-fhl', function (req, res) {
        if (req.session.data['this-fhl'] == "Yes"){
            res.redirect('jointly-let')
          }
          else {
            res.redirect('pia-yes-no')
          }
      })

  //Is your FHL jointly let?
  router.post(fhlukabout + 'jointly-let', function (req, res) {
      res.redirect('rar-or-expenses')
  })

  //If your FHL is your main residence you can claim the rent a room relief of
  // up to £7,500 (or £3,750, if it's jointly let).
  router.post(fhlukabout + 'rar-or-expenses', function (req, res) {
    if (req.session.data['rar-or-expenses'] == "Rent a room relief"
    && req.session.data['more-than-one-fhl'] != "No"){
      res.redirect('pia-yes-no')
    }
    else {
      res.redirect('cya')
    }
  })

  // You can still claim property income allowance of up to £1,000 on your
  // other FHL
  router.post(fhlukabout + 'pia-yes-no', function (req, res) {
    if(req.session.data['pia-yes-no'] == "PIA"){
      req.session.data['pia-yes-no'] = "Yes"
    }
    else{
      req.session.data['pia-yes-no'] = "No"
    }
      res.redirect('cya')
  })

  //FHL about CYA
  router.post(fhlukabout + 'cya', function (req, res) {
      res.redirect('complete-section')
  })

      //FHL complete section
      router.post(fhlukabout + 'complete-section', function (req, res) {
          res.redirect(version + '/property/task-list')
      })


  /*

  Income

  */

  var fhlukincome = version + "/property/furnished-holiday-lettings/uk/income/";

  router.post(fhlukincome + 'fhl-income', function (req, res) {
      res.redirect('cya')
  })


  router.post(fhlukincome + 'fhl-start-2', function (req, res) {
    if(req.session.data['rar-or-expenses'] == "Rent a room relief"){
      if(req.session.data['do-you-live-in-fhl'] == "Yes"){
        res.redirect('fhl-income-main-home')
      }
      else{
        res.redirect('fhl-income')
      }
    }
    else{
      res.redirect('fhl-non-resident-landlord')
    }

  })

  // Non-resident landlord Y/N
  router.post(fhlukincome + 'fhl-non-resident-landlord', function (req, res) {
      if (req.session.data['fhl-non-resident-landlord'] == "Yes") {
      res.redirect('fhl-nrl-tax-yn')
      }
      else{
          res.redirect('fhl-income')
      }
  })

  // Non-resident landlord TAX Y/N
  router.post(fhlukincome + 'fhl-nrl-tax-yn', function (req, res) {
          res.redirect('fhl-income')
  })

  router.post(fhlukincome + 'fhl-income', function (req, res) {
    res.redirect('cya')
  })


          // Experimental page for calculating a total for income
          router.get(fhlukincome + 'fhl-income-pia-input', function (req, res) {
            /*var inc01 = req.session.data['fhl-nrl-tax-yn-amount'] || 0,
            inc02 = req.session.data['fhl-income'] || 0,
            inc03 = req.session.data['fhl-taxablePGLAmount'] || 0,
            inc04 = req.session.data['fhl-reverse-premium-yn-amount'] || 0,
            inc05 = req.session.data['fhl-other-income'] || 0;
            const incomeTot = ((inc01 - 0) + (inc02 - 0) + (inc03 - 0) + (inc04 - 0) + (inc05 - 0));

            req.session.data.incomeTot = incomeTot;

            var balancingCharges = req.session.data['fhl-balancing-charges'] || 0;
            var piaLimit = ((balancingCharges - 0) + (incomeTot - 0));
            req.session.data.piaLimit = piaLimit;
            res.render(fhlukincome + 'fhl-income-pia-input', {
                'incomeTot': incomeTot,
                'piaLimit': piaLimit
            })*/
            res.render(fhlukincome + 'fhl-income-pia-input')
        })

  router.post(fhlukincome + 'cya', function (req, res) {
      res.redirect('complete-section')
  })

  router.post(fhlukincome + 'complete-section', function (req, res) {
    res.redirect(version + '/property/task-list')
  })


  // === === ===
  //
  // Expenses
  //

  var fhlukexpenses = version + "/property/furnished-holiday-lettings/uk/expenses/";

  router.post(fhlukexpenses + 'fhl-start-3', function (req, res) {
    if (req.session.data['income-range'] == "Over") {
      res.redirect('fhl-running-costs')
    } else
        // If NO - go to Individual expenses
    {
        res.redirect('fhl-consolidated-expenses')
    }
  })

  // Consolidated expenses
  router.post(fhlukexpenses + 'fhl-consolidated-expenses', function (req, res) {
          if (req.session.data['fhl-consolidated-expenses-yn'] == "Yes") {
              res.redirect('fhl-cya-expenses')
          } else
              // If NO - go to Individual expenses
          {
              res.redirect('fhl-running-costs')
          }

  })

  // Running costs
  router.post(fhlukexpenses + 'fhl-running-costs', function (req, res) {
          res.redirect('fhl-rent-repairs-insurance')
  })

  // Repairs and maintenance
  router.post(fhlukexpenses + 'fhl-rent-repairs-insurance', function (req, res) {
          res.redirect('fhl-loan-interest')
  })

  // Financial costs
  router.post(fhlukexpenses + 'fhl-loan-interest', function (req, res) {
          res.redirect('fhl-legal-management-fees')
  })

  // Professional fees
  router.post(fhlukexpenses + 'fhl-legal-management-fees', function (req, res) {
          res.redirect('fhl-services-costs')
  })

  // Services costs
  router.post(fhlukexpenses + 'fhl-services-costs', function (req, res) {
          res.redirect('fhl-travel-costs')
  })

  // Travel costs
  router.post(fhlukexpenses + 'fhl-travel-costs', function (req, res) {
          res.redirect('fhl-other-expenses')
  })

  // Other expenses
  router.post(fhlukexpenses + 'fhl-other-expenses', function (req, res) {
      res.redirect('fhl-cya-expenses')
  })

      // Expenses CYA
      router.post(fhlukexpenses + 'fhl-cya-expenses', function (req, res) {
          res.redirect('fhl-expenses-complete-section')
      })

              // Expenses complete section
                  router.post(fhlukexpenses + 'fhl-expenses-complete-section', function (req, res) {
                  res.redirect(version + '/property/task-list')
              })

  // === === ===
  //
  // Allowances
  //

  var fhlukallowances = version + "/property/furnished-holiday-lettings/uk/allowances/";

  router.post(fhlukallowances + 'fhl-start-4', function (req, res) {
      if (req.session.data['opr-account-method'] == "Traditional accounting"){
        res.redirect('fhl-annual-investment-allowance')
      }
      else{
        res.redirect('fhl-capital-cash-car-yn')
      }
  })

    // Annual investment allowance
    router.post(fhlukallowances + 'fhl-annual-investment-allowance', function (req, res) {
      res.redirect('fhl-electric-charge-point-combined')
    })

  // Electric charge point
  router.post(fhlukallowances + 'fhl-electric-charge-point-combined', function (req, res) {
          res.redirect('fhl-zero-emission-allowance')
  })

  // Zero-emission allowance
  router.post(fhlukallowances + 'fhl-zero-emission-allowance', function (req, res) {
          res.redirect('fhl-business-premises-renovation-allowance')
  })

  // Business premises renovation allowance
  router.post(fhlukallowances + 'fhl-business-premises-renovation-allowance', function (req, res) {
    if (req.session.data['fhl-travel-costs'] > 0){
      res.redirect('fhl-cya-allowances')
    }
    else{
      res.redirect('fhl-other-capital-allowance')
    }

  })

  // Capital cash car
  router.post(fhlukallowances + 'fhl-capital-cash-car-yn', function (req, res) {
    res.redirect('fhl-cya-allowances')
  })

  // Other capital allowance
  router.post(fhlukallowances + 'fhl-other-capital-allowance', function (req, res) {
    res.redirect('fhl-cya-allowances')
  })

  // Allowances CYA
  router.post(fhlukallowances + 'fhl-cya-allowances', function (req, res) {
      res.redirect('fhl-allowances-complete-section')
  })

  // Allowances complete section
  router.post(fhlukallowances + 'fhl-allowances-complete-section', function (req, res) {
      res.redirect(version + '/property/task-list')
  })

  // === === ===
  // Adjustments
  //

  var fhlukadjustments = version + "/property/furnished-holiday-lettings/uk/adjustments/";

  router.post(fhlukadjustments + 'fhl-start-5', function (req, res) {
      res.redirect('fhl-balancing-charge-combined')
  })

  router.post(fhlukadjustments + 'fhl-balancing-charge-combined', function (req, res) {
              // If YES -
              if (req.session.data['pia-yes-no'] == "Yes") {
                res.redirect('fhl-yes-to-pia')
            }
            else
                // If NO -
            {
                res.redirect('fhl-private-use')
            }
})

  router.post(fhlukadjustments + 'fhl-private-use', function (req, res) {
          res.redirect('fhl-business-premises-renovation-allowance-balancing-charge')
  })

  // FHL How much PIA does you/your client want to claim? Estela G 08-04-2023
  router.post(fhlukadjustments + 'fhl-yes-to-pia', function (req, res) {
    res.redirect('fhl-business-premises-renovation-allowance-balancing-charge')
})

   router.get(fhlukadjustments + 'fhl-income-allowance-combined', function (req, res) {
      res.render('fhl-income-allowance-combined', {})
  })

  router.post(fhlukadjustments + 'fhl-income-allowance-combined', function (req, res) {
      // Just come from CYA?
      if (req.session.data['camefromcheckanswersfhl'] == "true") {
          req.session.data['camefromcheckanswersfhl'] = "false";
          res.redirect('opr-cya')

      // IF YES to CYA?
      }
      else if (req.session.data['fhl-income-allowance-combined-yn'] == "Yes") {
               res.redirect('fhl-start-5')
      }
      else if (req.session.data['fhl-income-allowance-combined-yn'] == "No") {
               res.redirect('fhl-start-5')
      }
      else {
               res.redirect('fhl-start-5')
      }

  })

  // Balancing charge
  router.post(fhlukadjustments + 'fhl-balancing-charge-combined', function (req, res) {
          res.redirect('fhl-business-premises-renovation-allowance-balancing-charge')
  })

  // Business premises renovation allowance balancing charge
  router.post(fhlukadjustments + 'fhl-business-premises-renovation-allowance-balancing-charge', function (req, res) {
          res.redirect('fhl-period-of-grace-yn')
  })

  // Period of grace
  router.post(fhlukadjustments + 'fhl-period-of-grace-yn', function (req, res) {
          res.redirect('cya')
  })

  router.post(fhlukadjustments + 'cya', function (req, res) {
      res.redirect('complete-section')
  })

  router.post(fhlukadjustments + 'complete-section', function (req, res) {
      res.redirect(version + '/property/task-list')
  })

  // Adjusted profit/loss
  router.get(fhlukadjustments + 'fhl-adjusted-profit', function (req, res) {

      // Note: Income allowance figure from OPR refernce

      var incfhl01 = req.session.data['fhl-income'] || 0,
          expfhl01 = req.session.data['fhl-nrl-tax-yn-amount'] || 0,
          expfhl02 = req.session.data['global-income-allowance'] || 0,
          expfhl03 = req.session.data['fhl-consolidated-expenses-amount'] || 0,
          expfhl04 = req.session.data['fhl-running-costs'] || 0,
          expfhl05 = req.session.data['fhl-rent-repairs-insurance'] || 0,
          expfhl06 = req.session.data['fhl-loan-interest'] || 0,
          expfhl07 = req.session.data['fhl-legal-management-fees'] || 0,
          expfhl08 = req.session.data['fhl-services-costs'] || 0,
          expfhl09 = req.session.data['fhl-travel-costs'] || 0,
          expfhl10 = req.session.data['fhl-other-expenses'] || 0,
          allfhl01 = req.session.data['fhl-electric-charge-point-allowance'] || 0,
          allfhl02 = req.session.data['fhl-zero-emission-allowance'] || 0,
          allfhl03 = req.session.data['fhl-bpra'] || 0,
          allfhl04 = req.session.data['fhl-other-capital-allowance'] || 0,
          adjfhl01 = req.session.data['fhl-private-use'] || 0,
          adjfhl02 = req.session.data['fhl-balancing-charges'] || 0,
          adjfhl03 = req.session.data['fhl-bpra-balancing-charges'] || 0,
          z = 450;

      // Incomes
      const incomeFHLTot = ((incfhl01 - 0));
      req.session.data.incomeFHLTot = incomeFHLTot;

      // Expenses 1 = No PIA or CE
      const expense01FHLTot = ((expfhl01 - 0) + (expfhl04 - 0) + (expfhl05 - 0) + (expfhl06 - 0) + (expfhl07 - 0) + (expfhl08 - 0) + (expfhl09 - 0) + (expfhl10 - 0));
      req.session.data.expense01FHLTot = expense01FHLTot;

      // Expenses 2 =  PIA Yes
      const expense02FHLTot = ((expfhl01 - 0) + (expfhl02 - 0));
      req.session.data.expense02FHLTot = expense02FHLTot;

      // Expenses 3 =  CE Yes
      const expense03FHLTot = ((expfhl01 - 0) + (expfhl03 - 0));
      req.session.data.expense03FHLTot = expense03FHLTot;

      // Allowances
      const allowanceFHLTot = ((allfhl01 - 0) + (allfhl02 - 0) + (allfhl03 - 0) + (allfhl04 - 0));
      req.session.data.allowanceFHLTot = allowanceFHLTot;

      // Adjustments
      const adjustFHLTot = ((adjfhl01 - 0) + (adjfhl02 - 0) + (adjfhl03 - 0));
      req.session.data.adjustFHLTot = adjustFHLTot;

      // Total with no PIA no Consolidated
      const calcFHLNoPia = (incomeFHLTot - expense01FHLTot - allowanceFHLTot + adjustFHLTot);
      req.session.data.calcFHLNoPia = calcFHLNoPia;

      // Total with PIA
      const calcFHLYesPia = (incomeFHLTot - expense02FHLTot + adjustFHLTot);
      req.session.data.calcFHLYesPia = calcFHLYesPia;

      // Total with Consolidated
      const calcFHLYesCon = (incomeFHLTot - expense03FHLTot - allowanceFHLTot + adjustFHLTot);
      req.session.data.calcFHLYesCon = calcFHLYesCon;

      res.render('fhl-adjusted-profit', {
          'incomeFHLTot': incomeFHLTot,
          'expense01FHLTot': expense01FHLTot,
          'expense02FHLTot': expense02FHLTot,
          'expense03FHLTot': expense03FHLTot,
          'allowanceFHLTot': allowanceFHLTot,
          'adjustFHLTot': adjustFHLTot,
          'calcFHLNoPia': calcFHLNoPia,
          'calcFHLYesPia': calcFHLYesPia,
          'calcFHLYesCon': calcFHLYesCon,

      })
  })

  router.post(fhlukadjustments + 'fhl-adjusted-profit', function (req, res) {
      res.redirect('fhl-complete-section')
  })

  // Have you finished?
  router.get(fhlukadjustments + 'fhl-complete-section', function (req, res) {
      res.render('fhl-complete-section', {})
  })

  router.post(fhlukadjustments + 'fhl-complete-section', function (req, res) {

      // if NOT FINISHED go back
      if (req.session.data['fhl-complete-section'] == 'no') {
          req.session.data.fhlComplete = 'NotComplete'
          res.redirect('../../property-overview')
      } else
          // if FINISHED goto summary
      {
          req.session.data.fhlComplete = 'YesComplete';
          res.redirect('../../property-overview')
      }

  })

  // === === === === === === === === === === === === === === === === === === === === === === === === === === ===
    // === === === === === === === === === === === === === === === === === === === === === === === === === === ===
    // === === === === === === === === === === === === === === === === === === === === === === === === === === ===
    // === === === === === === === === === === === === === === === === === === === === === === === === === === ===
    // === === === === === === === === === === === === === === === === === === === === === === === === === === ===
    // === === === === === === === === === === === === === === === === === === === === === === === === === === ===

    // === === === === === === === === ===
    // Property
    // Rent-a-Room
    // 55555 RaRs
    // === === === === === === === === ===
    //
    // _____       _____
    // |  __ \     |  __ \
    // | |__) |__ _| |__) |  ___
    // |  _  // _` |  _  /  / __|
    // | | \ \ (_| | | \ \  \__ \
    // |_|  \_\__,_|_|  \_\ |___/
    //
    // === === === === === === === === ===


/*

About

*/

var rarukabout = version + "/property/rent-a-room/uk/about/";

  // RAR joint y/n
  router.post(rarukabout + 'rar-rentals-start', function (req, res) {
    res.redirect('rar-jointly-let')
  })

  // RAR joint y/n
  router.post(rarukabout + 'rar-jointly-let', function (req, res) {
    res.redirect('rar-income-amount')
  })


  // RAR Income Amount
  router.post(rarukabout + 'rar-income-amount', function (req, res) {
    if(req.session.data['rar-rentals'] == "yes"){
      res.redirect('rarr-or-expenses')
    }
    else{
      res.redirect('rar-balancing-charge')
    }
  })

  // Do you have to pay a balancing charge?
  router.post(rarukabout + 'rar-balancing-charge', function (req, res) {
    res.redirect('rarr-or-expenses')
  })

  // Claim expenses or rent a room relief
  router.post(rarukabout + 'rarr-or-expenses', function (req, res) {
    if (req.session.data['rar-rentals'] == "yes"){
      res.redirect('pia-yes-no')
    }
    else{
      res.redirect('rar-about-cya')
    }
  })

  // Do you want to claim property income allowance?
  router.post(rarukabout + 'pia-yes-no', function (req, res) {
    res.redirect('rar-about-cya')
  })


  // === === === === === === === === ===
  //
  // EXPENSES
  //

  // RAR Consolidated expenses / Individual expenses
  router.post(version + '/property/rent-a-room/uk/expenses/rar-consolidated-expenses', function (req, res) {
          if (req.session.data['rar-consolidated-expenses-yn'] == "Yes") {
              res.redirect('rar-expenses-cya')
          } else
              // If NO
          {
              res.redirect('rar-running-costs')
          }
  })


/*

Expenses

*/

  // RAR Start 3 (Expenses)
  router.post(version + '/property/rent-a-room/uk/expenses/rar-start-3', function (req, res) {
    if (req.session.data['income-range'] =="Over"){
      res.redirect('rar-running-costs')
    }
    else{
      res.redirect('rar-consolidated-expenses')
    }
  })


  // How much income did you you receive? (rar-specify-income) - not currently used
  router.post(version + '/property/rent-a-room/uk/expenses/rar-specify-income', function (req, res) {
          res.redirect('rar-consolidated-expenses')
  })

  // RAR running costs
  router.post(version + '/property/rent-a-room/uk/expenses/rar-running-costs', function (req, res) {
          res.redirect('rar-repairs-maintenance')
  })

  // RAR repairs maintenance
  router.post(version + '/property/rent-a-room/uk/expenses/rar-repairs-maintenance', function (req, res) {
          res.redirect('rar-professional-fees')
  })

  // RAR professional fees
  router.post(version + '/property/rent-a-room/uk/expenses/rar-professional-fees', function (req, res) {
          res.redirect('rar-services-costs')
  })

  // RAR service costs
  router.post(version + '/property/rent-a-room/uk/expenses/rar-services-costs', function (req, res) {
          res.redirect('rar-residential-financial-cost')
  })

  // RAR Residential financial cost
  router.post(version + '/property/rent-a-room/uk/expenses/rar-residential-financial-cost', function (req, res) {
          res.redirect('rar-residential-financial-cost-CF')
  })

  // RAR Residential financial cost carried foward CF
  router.post(version + '/property/rent-a-room/uk/expenses/rar-residential-financial-cost-CF', function (req, res) {
          res.redirect('rar-other-expenses')
  })



   // RAR Other expenses
  router.post(version + '/property/rent-a-room/uk/expenses/rar-other-expenses', function (req, res) {
              res.redirect('rar-expenses-cya')
  })

       // RAR Expenses CYA
      router.post(version + '/property/rent-a-room/uk/expenses/rar-expenses-cya', function (req, res) {
        res.redirect('rar-expenses-complete-section')
      })

      //expenses complete section
router.post(version + '/property/rent-a-room/uk/expenses/rar-expenses-complete-section', function (req, res) {
  res.redirect(version + '/property/task-list')
})

/*

Allowances

*/

  // RAR Allowances
  router.post(version + '/property/rent-a-room/uk/allowances/rar-start-4', function (req, res) {
          res.redirect('rar-annual-investment-allowance')
  })

  // RAR Annual investment allowance
  router.post(version + '/property/rent-a-room/uk/allowances/rar-annual-investment-allowance', function (req, res) {
          res.redirect('rar-electric-charge-point-combined')
  })

  // RAR Electric charge-point allowance total (rar-electric-charge-point-combined)
  router.post(version + '/property/rent-a-room/uk/allowances/rar-electric-charge-point-combined', function (req, res) {
              res.redirect('rar-zero-emission-allowance')
  })

  // RAR Zero-emission car allowance
  router.post(version + '/property/rent-a-room/uk/allowances/rar-zero-emission-allowance', function (req, res) {
          res.redirect('rar-replacing-domestic-goods')
  })


  // RAR Replacement of domestic goods
  router.post(version + '/property/rent-a-room/uk/allowances/rar-replacing-domestic-goods', function (req, res) {
              res.redirect('rar-capital-cash-car-yn')
  })


  // RAR Capital allowances for a car - rar-capital-cash-car-yn
  router.post(version + '/property/rent-a-room/uk/allowances/rar-capital-cash-car-yn', function (req, res) {
if (req.session.data['rar-capital-cash-car-yn'] == "Yes") {
              // If YES - Go to page here
              res.redirect('rar-other-capital-allowance')
          } else {
              // If NO - Go to rar-Enhanced SBA
              res.redirect('rar-allowances-cya')
          }
  })


  // RAR Other capital allowances
  router.post(version + '/property/rent-a-room/uk/allowances/rar-other-capital-allowance', function (req, res) {
          res.redirect('rar-allowances-cya')
  })


/*

Adjustments

*/

   // RAR Adjustments
  router.post(version + '/property/rent-a-room/uk/adjustments/rar-start-5', function (req, res) {
      res.redirect('rar-private-use')
  })


   // RAR Private use adjustment
  router.post(version + '/property/rent-a-room/uk/adjustments/rar-private-use', function (req, res) {
          res.redirect('rar-adjustments-cya')
  })

  // RAR adjustments CYA
  router.post(version + '/property/rent-a-room/uk/adjustments/rar-adjustments-cya', function (req, res) {
    res.redirect('../../../task-list')
  })

// === === ===
// Summary
//
//

// RAR Check your answers
router.get('/' + version + '/property/rent-a-room/uk/rar-cya', function (req, res) {
  res.render(version + '/property/rent-a-room/uk/rar-cya', {})
})

router.post('/' + version + '/property/rent-a-room/uk/rar-cya', function (req, res) {
  res.redirect('#')
})

// RAR Adjusted profit
router.post('/' + version + '/property/rent-a-room/uk/rar-adjusted-profit', function (req, res) {
  res.redirect('rar-complete-section')
})


// Complete section
router.post('/' + version + '/property/rent-a-room/uk/rar-complete-section', function (req, res) {

  // if NOT FINISHED set to In progress
  if (req.session.data['opr-complete-section'] == 'no') {
      req.session.data.oprComplete = 'NotComplete'
      res.redirect('../../property-overview')
  } else
      // if FINISHED set to Completed
  {
      req.session.data.oprComplete = 'YesComplete';
      res.redirect('../../property-overview')
  }
})


//About CYA
router.post(rarukabout + 'rar-cya', function (req, res) {
  res.redirect('rar-about-complete-section')
})

//About complete section
router.post(rarukabout + 'rar-about-complete-section', function (req, res) {
  res.redirect(version + '/property/task-list')
})

/*

Adjustments

*/

//adjustments CYA
router.post(version + '/property/rent-a-room/uk/adjustments/rar-cya', function (req, res) {
  res.redirect('rar-adjustments-complete-section')
})

//adjustments complete section
router.post(version + '/property/rent-a-room/uk/adjustments/rar-adjustments-complete-section', function (req, res) {
  res.redirect(version + '/property/task-list')
})

//allowances CYA
router.post(version + '/property/rent-a-room/uk/allowances/rar-allowances-cya', function (req, res) {
  res.redirect('rar-allowances-complete-section')
})

//allowances complete section
router.post(version + '/property/rent-a-room/uk/allowances/rar-allowances-complete-section', function (req, res) {
  res.redirect(version + '/property/task-list')
})

//allowances CYA
router.post('/' + version + '/property/rent-a-room/uk/allowances/rar-allowances-cya', function (req, res) {
  res.redirect('rar-allowances-complete-section')
})

//allowances complete section
router.post('/' + version + '/property/rent-a-room/uk/allowances/rar-allowances-complete-section', function (req, res) {
  res.redirect('/' + version + '/property/task-list')
})


}
