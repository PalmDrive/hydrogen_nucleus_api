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
    instance = new HydrogenNucleusApi.DepositAccountVO();
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

  describe('DepositAccountVO', function() {
    it('should create an instance of DepositAccountVO', function() {
      // uncomment below and update the code to test DepositAccountVO
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be.a(HydrogenNucleusApi.DepositAccountVO);
    });

    it('should have the property depositAccountId (base name: "deposit_account_id")', function() {
      // uncomment below and update the code to test the property depositAccountId
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be();
    });

    it('should have the property depositAccountName (base name: "deposit_account_name")', function() {
      // uncomment below and update the code to test the property depositAccountName
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be();
    });

    it('should have the property depositAmount (base name: "deposit_amount")', function() {
      // uncomment below and update the code to test the property depositAmount
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be();
    });

    it('should have the property depositDirection (base name: "deposit_direction")', function() {
      // uncomment below and update the code to test the property depositDirection
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be();
    });

    it('should have the property depositId (base name: "deposit_id")', function() {
      // uncomment below and update the code to test the property depositId
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be();
    });

    it('should have the property depositReceivedDate (base name: "deposit_received_date")', function() {
      // uncomment below and update the code to test the property depositReceivedDate
      //var instane = new HydrogenNucleusApi.DepositAccountVO();
      //expect(instance).to.be();
    });

  });

}));
