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
    instance = new HydrogenNucleusApi.AccountHoldingVO();
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

  describe('AccountHoldingVO', function() {
    it('should create an instance of AccountHoldingVO', function() {
      // uncomment below and update the code to test AccountHoldingVO
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.AccountHoldingVO);
    });

    it('should have the property accountHoldingDate (base name: "account_holding_date")', function() {
      // uncomment below and update the code to test the property accountHoldingDate
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property amount (base name: "amount")', function() {
      // uncomment below and update the code to test the property amount
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securityAssetClass (base name: "security_asset_class")', function() {
      // uncomment below and update the code to test the property securityAssetClass
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securityCategory (base name: "security_category")', function() {
      // uncomment below and update the code to test the property securityCategory
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securityId (base name: "security_id")', function() {
      // uncomment below and update the code to test the property securityId
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securityIndustry (base name: "security_industry")', function() {
      // uncomment below and update the code to test the property securityIndustry
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securityName (base name: "security_name")', function() {
      // uncomment below and update the code to test the property securityName
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securitySector (base name: "security_sector")', function() {
      // uncomment below and update the code to test the property securitySector
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property securityTicker (base name: "security_ticker")', function() {
      // uncomment below and update the code to test the property securityTicker
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property shares (base name: "shares")', function() {
      // uncomment below and update the code to test the property shares
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

    it('should have the property weight (base name: "weight")', function() {
      // uncomment below and update the code to test the property weight
      //var instane = new HydrogenNucleusApi.AccountHoldingVO();
      //expect(instance).to.be();
    });

  });

}));
