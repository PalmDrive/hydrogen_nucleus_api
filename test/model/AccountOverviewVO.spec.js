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
    instance = new HydrogenNucleusApi.AccountOverviewVO();
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

  describe('AccountOverviewVO', function() {
    it('should create an instance of AccountOverviewVO', function() {
      // uncomment below and update the code to test AccountOverviewVO
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.AccountOverviewVO);
    });

    it('should have the property accountAssetSize (base name: "account_asset_size")', function() {
      // uncomment below and update the code to test the property accountAssetSize
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property accountAssetSizeDate (base name: "account_asset_size_date")', function() {
      // uncomment below and update the code to test the property accountAssetSizeDate
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property accountHoldings (base name: "account_holdings")', function() {
      // uncomment below and update the code to test the property accountHoldings
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property accountId (base name: "account_id")', function() {
      // uncomment below and update the code to test the property accountId
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "account_name")', function() {
      // uncomment below and update the code to test the property accountName
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property accountTypeId (base name: "account_type_id")', function() {
      // uncomment below and update the code to test the property accountTypeId
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property accountTypeName (base name: "account_type_name")', function() {
      // uncomment below and update the code to test the property accountTypeName
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property allocations (base name: "allocations")', function() {
      // uncomment below and update the code to test the property allocations
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property clients (base name: "clients")', function() {
      // uncomment below and update the code to test the property clients
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property deposits (base name: "deposits")', function() {
      // uncomment below and update the code to test the property deposits
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

    it('should have the property withdrawals (base name: "withdrawals")', function() {
      // uncomment below and update the code to test the property withdrawals
      //var instane = new HydrogenNucleusApi.AccountOverviewVO();
      //expect(instance).to.be();
    });

  });

}));
