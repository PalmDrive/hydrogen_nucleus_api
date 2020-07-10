/**
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydrogenNucleusApi);
  }
}(this, function(expect, HydrogenNucleusApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HydrogenNucleusApi.AccountAdvisorVO();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AccountAdvisorVO', function() {
    it('should create an instance of AccountAdvisorVO', function() {
      // uncomment below and update the code to test AccountAdvisorVO
      //var instane = new HydrogenNucleusApi.AccountAdvisorVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.AccountAdvisorVO);
    });

    it('should have the property accountType (base name: "account_type")', function() {
      // uncomment below and update the code to test the property accountType
      //var instane = new HydrogenNucleusApi.AccountAdvisorVO();
      //expect(instance).to.be();
    });

    it('should have the property accountsManaged (base name: "accounts_managed")', function() {
      // uncomment below and update the code to test the property accountsManaged
      //var instane = new HydrogenNucleusApi.AccountAdvisorVO();
      //expect(instance).to.be();
    });

    it('should have the property assetsManaged (base name: "assets_managed")', function() {
      // uncomment below and update the code to test the property assetsManaged
      //var instane = new HydrogenNucleusApi.AccountAdvisorVO();
      //expect(instance).to.be();
    });

    it('should have the property clientsManaged (base name: "clients_managed")', function() {
      // uncomment below and update the code to test the property clientsManaged
      //var instane = new HydrogenNucleusApi.AccountAdvisorVO();
      //expect(instance).to.be();
    });

  });

}));