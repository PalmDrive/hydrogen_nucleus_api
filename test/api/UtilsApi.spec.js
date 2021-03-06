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
    instance = new HydrogenNucleusApi.UtilsApi();
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

  describe('UtilsApi', function() {
    describe('createAccountStatusUsingPost', function() {
      it('should call createAccountStatusUsingPost successfully', function(done) {
        //uncomment below and update the code to test createAccountStatusUsingPost
        //instance.createAccountStatusUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createStageUsingPost', function() {
      it('should call createStageUsingPost successfully', function(done) {
        //uncomment below and update the code to test createStageUsingPost
        //instance.createStageUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createTransactionCodeUsingPost', function() {
      it('should call createTransactionCodeUsingPost successfully', function(done) {
        //uncomment below and update the code to test createTransactionCodeUsingPost
        //instance.createTransactionCodeUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAccountStatusUsingDelete', function() {
      it('should call deleteAccountStatusUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAccountStatusUsingDelete
        //instance.deleteAccountStatusUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteStageUsingDelete', function() {
      it('should call deleteStageUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteStageUsingDelete
        //instance.deleteStageUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteTransactionCodeUsingDelete', function() {
      it('should call deleteTransactionCodeUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteTransactionCodeUsingDelete
        //instance.deleteTransactionCodeUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountStatusAllUsingGet', function() {
      it('should call getAccountStatusAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountStatusAllUsingGet
        //instance.getAccountStatusAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountStatusUsingGet', function() {
      it('should call getAccountStatusUsingGet successfully', function(done) {
        //uncomment below and update the code to test getAccountStatusUsingGet
        //instance.getAccountStatusUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStageAllUsingGet', function() {
      it('should call getStageAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getStageAllUsingGet
        //instance.getStageAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStageUsingGet', function() {
      it('should call getStageUsingGet successfully', function(done) {
        //uncomment below and update the code to test getStageUsingGet
        //instance.getStageUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionCodeAllUsingGet', function() {
      it('should call getTransactionCodeAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getTransactionCodeAllUsingGet
        //instance.getTransactionCodeAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTransactionCodeUsingGet', function() {
      it('should call getTransactionCodeUsingGet successfully', function(done) {
        //uncomment below and update the code to test getTransactionCodeUsingGet
        //instance.getTransactionCodeUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateAccountStatusUsingPut', function() {
      it('should call updateAccountStatusUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateAccountStatusUsingPut
        //instance.updateAccountStatusUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateStageUsingPut', function() {
      it('should call updateStageUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateStageUsingPut
        //instance.updateStageUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateTransactionCodeUsingPut', function() {
      it('should call updateTransactionCodeUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateTransactionCodeUsingPut
        //instance.updateTransactionCodeUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
