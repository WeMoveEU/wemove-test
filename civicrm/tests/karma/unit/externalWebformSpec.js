'use strict';

describe('Web page', function(){
    
  // test with simple HTML page in different domain
  jasmine.getFixtures().fixturesPath = '';
  var fixtureUrl = 'http://localhost:7979';
  
  // Index page content:
  //<html>
  //<title>Test strony</title>
  //<body>
  //<h1>Header 1</h1>
  //<p class="paragraf" title="title of paragraf">Content of paragraf with class paragraf.</p>
  //<p id="civicrm_1_contact_1_contact_first_name">id form</p>
  //</body>
  //</html>
  
  beforeEach(function(){
    jasmine.getFixtures().clearCache();
  });  
  
  it("with jQuery retrieve elements (by load())", function () {
    jasmine.getFixtures().load(fixtureUrl); //  it works but element contains a lot of other code!
    //loadFixtures(fixtureUrl); // shortcut to the same function
    var el = $('.paragraf');
    expect(el).not.toBeEmpty();
    expect(el).toHaveClass("paragraf");
    expect(el).not.toHaveClass("header");
  });
    
  it("with simple text comparison (by read())", function () {
    var html = jasmine.getFixtures().read(fixtureUrl); // it works, simple text comparison
    //var html = readFixtures(fixtureUrl); // shortcut to the same function
    expect(html).toContain('Content of paragraf');
  });
    
});
