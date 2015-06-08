'use strict';

describe('Petition form', function(){
    
  jasmine.getFixtures().fixturesPath = '';
  var fixtureUrl = 'http://localhost:8001/node/3';  // form with petition
  
  // form id fields for petition 
  //'civicrm-1-contact-1-contact-first-name'
  //'civicrm_1_contact_1_contact_last_name',
  //'civicrm_1_contact_1_email_email',
  //'civicrm_1_contact_1_address_country_id',
  //'civicrm_1_contact_1_address_city',
  var fieldsId = {
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-contact-first-name' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-contact-last-name' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-email-email' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-address-country-id' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-address-city' : {'required' : false}
  };
  
  beforeEach(function(){
    jasmine.getFixtures().clearCache();
    jasmine.getFixtures().load(fixtureUrl); 
  });
  
      
  it("should has all fields", function () {
    var id;
    for (id in fieldsId)
    {
      var el = jQuery("#"+id);
      expect(el).toHaveId(id);
    }
  });  
    
    
  it("should has fields with attribute required", function () {
    var id;
    for (id in fieldsId)
    {
      if (fieldsId[id].required)
      {
        var el = jQuery("#"+id);
        expect(el).toHaveAttr('required');
      }      
    }
  });  
  
    
});