'use strict';

describe('Petition form', function(){
    
  jasmine.getFixtures().fixturesPath = '';
  var fixtureUrl = 'http://localhost:8001/node/3';  // form with petition
  
  var formId = 'webform-client-form-3';
  var labelRequiredClass = 'form-required';
  var fieldsId = {
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-contact-first-name' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-contact-last-name' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-email-email' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-address-country-id' : {'required' : true},
    'edit-submitted-civicrm-1-contact-1-fieldset-fieldset-civicrm-1-contact-1-address-city' : {'required' : false}
  };
  var hiddenNames = {
    'details[sid]' : {},
    'details[page_num]' : {},
    'details[page_count]' : {},
    'details[finished]' : {},
    'form_build_id' : {},
    'form_id' : {}
  };
  
  
  beforeEach(function(){
    jasmine.getFixtures().clearCache();
    jasmine.getFixtures().load(fixtureUrl);     
  });
  
      
  it("should has all fields", function () {
    var id;
    for (id in fieldsId) {
      var el = jQuery("#"+id);
      expect(el).toHaveId(id);
    }
  });
    
    
  it("should has label elements for all fields", function () {
    var id;
    for (id in fieldsId) {
      var el = jQuery("label[for="+id+"]");
      expect(el).toExist();
    }
  });
    
    
  it("should has fields with attribute 'required'", function () {
    var id;
    for (id in fieldsId) {
      if (fieldsId[id].required) {
        var el = jQuery("#"+id);
        expect(el).toHaveAttr('required');
      }
    }
  });  
  
  
  it("should has annotation about 'required' fields", function () {
    var id;
    for (id in fieldsId) {
      if (fieldsId[id].required) {
        var el = jQuery("label[for="+id+"] ."+labelRequiredClass);
        expect(el).toExist();
      }
    }
  }); 
  
  
  it("should has submit button", function(){
    var el = jQuery("form#"+formId+" input[type=submit]");
    expect(el).toExist();
    expect(el.length).toBe(1);
  });
  
  
  it("should has required hidden fields", function(){
    var hiddenName;
    for (hiddenName in hiddenNames) {
      var el = jQuery("form#"+formId+" input[type=hidden][name='"+hiddenName+"']");
      expect(el.length).toEqual(1); 
    }
  });
    
});
