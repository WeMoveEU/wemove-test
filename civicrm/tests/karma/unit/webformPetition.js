'use strict';

describe('Petition form', function(){
    
  jasmine.getFixtures().fixturesPath = '';
  var fixtureUrl = 'http://localhost:8001/node/3';  // form with petition
  //var fixtureUrl = 'http://localhost:7979';
  
  // form id fields for petition 
  //'civicrm-1-contact-1-contact-first-name'
  //'civicrm_1_contact_1_contact_last_name',
  //'civicrm_1_contact_1_email_email',
  //'civicrm_1_contact_1_address_country_id',
  //'civicrm_1_contact_1_address_city',
  var fieldsId = [
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-contact-first-name',
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-contact-last-name',
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-email-email',
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-address-country-id',
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-address-city'
  ];
  
  beforeEach(function(){
    jasmine.getFixtures().clearCache();
  });
      
  it("should has all required fields", function () {
    
    
    loadFixtures(fixtureUrl); // ReferenceError: Can't find variable: Drupal
    //jasmine.getFixtures().load(fixtureUrl); // shortcut function

    // ReferenceError: Can't find variable: Drupal
    // at http://localhost:8001/sites/all/modules/contrib/webform/js/webform.js?np28jd&_=1433332928167:8
    // this error occurs on civicrm and drupal pages

    var id;
    for (id in fieldsId)
    {
      var el = $("#"+fieldsId[id]);
      //console.log("#"+fieldsId[id]);
      //console.log(el);   
      //console.log('val: '+el.attr('required'));
      //expect(el).toHaveData('required');
      expect(el.length).toEqual(1); // it works!
      expect(el).toHaveId(fieldsId[id]);  // it works!
    }

  });
  
  
    
});