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
    instance = new HydrogenNucleusApi.DocumentApi();
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

  describe('DocumentApi', function() {
    describe('createDocumentUsingPost', function() {
      it('should call createDocumentUsingPost successfully', function(done) {
        //uncomment below and update the code to test createDocumentUsingPost
        //instance.createDocumentUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteDocumentUsingDelete', function() {
      it('should call deleteDocumentUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteDocumentUsingDelete
        //instance.deleteDocumentUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentAllUsingGet', function() {
      it('should call getDocumentAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getDocumentAllUsingGet
        //instance.getDocumentAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getDocumentUsingGet', function() {
      it('should call getDocumentUsingGet successfully', function(done) {
        //uncomment below and update the code to test getDocumentUsingGet
        //instance.getDocumentUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateDocumentUsingPut', function() {
      it('should call updateDocumentUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateDocumentUsingPut
        //instance.updateDocumentUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
