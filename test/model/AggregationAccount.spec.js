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
    instance = new HydrogenNucleusApi.AggregationAccount();
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

  describe('AggregationAccount', function() {
    it('should create an instance of AggregationAccount', function() {
      // uncomment below and update the code to test AggregationAccount
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be.a(HydrogenNucleusApi.AggregationAccount);
    });

    it('should have the property accountHolder (base name: "account_holder")', function() {
      // uncomment below and update the code to test the property accountHolder
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property accountName (base name: "account_name")', function() {
      // uncomment below and update the code to test the property accountName
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property accountNumber (base name: "account_number")', function() {
      // uncomment below and update the code to test the property accountNumber
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property bankLinkId (base name: "bank_link_id")', function() {
      // uncomment below and update the code to test the property bankLinkId
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property createDate (base name: "create_date")', function() {
      // uncomment below and update the code to test the property createDate
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property currencyCode (base name: "currency_code")', function() {
      // uncomment below and update the code to test the property currencyCode
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property financialOfferId (base name: "financial_offer_id")', function() {
      // uncomment below and update the code to test the property financialOfferId
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property institutionName (base name: "institution_name")', function() {
      // uncomment below and update the code to test the property institutionName
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property isActive (base name: "is_active")', function() {
      // uncomment below and update the code to test the property isActive
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property isAsset (base name: "is_asset")', function() {
      // uncomment below and update the code to test the property isAsset
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property isBusiness (base name: "is_business")', function() {
      // uncomment below and update the code to test the property isBusiness
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property isInvestment (base name: "is_investment")', function() {
      // uncomment below and update the code to test the property isInvestment
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property isLinkVerified (base name: "is_link_verified")', function() {
      // uncomment below and update the code to test the property isLinkVerified
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property mask (base name: "mask")', function() {
      // uncomment below and update the code to test the property mask
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property secondaryId (base name: "secondary_id")', function() {
      // uncomment below and update the code to test the property secondaryId
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property subcategory (base name: "subcategory")', function() {
      // uncomment below and update the code to test the property subcategory
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

    it('should have the property updateDate (base name: "update_date")', function() {
      // uncomment below and update the code to test the property updateDate
      //var instane = new HydrogenNucleusApi.AggregationAccount();
      //expect(instance).to.be();
    });

  });

}));
