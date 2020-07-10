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
    instance = new HydrogenNucleusApi.MarketingApi();
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

  describe('MarketingApi', function() {
    describe('createCampaignDataUsingPost', function() {
      it('should call createCampaignDataUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCampaignDataUsingPost
        //instance.createCampaignDataUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCampaignPlanUsingPost', function() {
      it('should call createCampaignPlanUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCampaignPlanUsingPost
        //instance.createCampaignPlanUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createCampaignUsingPost', function() {
      it('should call createCampaignUsingPost successfully', function(done) {
        //uncomment below and update the code to test createCampaignUsingPost
        //instance.createCampaignUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createClientCampaignUsingPost', function() {
      it('should call createClientCampaignUsingPost successfully', function(done) {
        //uncomment below and update the code to test createClientCampaignUsingPost
        //instance.createClientCampaignUsingPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCampaignDataUsingDelete', function() {
      it('should call deleteCampaignDataUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteCampaignDataUsingDelete
        //instance.deleteCampaignDataUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCampaignPlanUsingDelete', function() {
      it('should call deleteCampaignPlanUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteCampaignPlanUsingDelete
        //instance.deleteCampaignPlanUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteCampaignUsingDelete', function() {
      it('should call deleteCampaignUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteCampaignUsingDelete
        //instance.deleteCampaignUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteClientCampaignUsingDelete', function() {
      it('should call deleteClientCampaignUsingDelete successfully', function(done) {
        //uncomment below and update the code to test deleteClientCampaignUsingDelete
        //instance.deleteClientCampaignUsingDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignAllUsingGet', function() {
      it('should call getCampaignAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCampaignAllUsingGet
        //instance.getCampaignAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignDataAllUsingGet', function() {
      it('should call getCampaignDataAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCampaignDataAllUsingGet
        //instance.getCampaignDataAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignDataUsingGet', function() {
      it('should call getCampaignDataUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCampaignDataUsingGet
        //instance.getCampaignDataUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignPlanAllUsingGet', function() {
      it('should call getCampaignPlanAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCampaignPlanAllUsingGet
        //instance.getCampaignPlanAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignPlanUsingGet', function() {
      it('should call getCampaignPlanUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCampaignPlanUsingGet
        //instance.getCampaignPlanUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCampaignUsingGet', function() {
      it('should call getCampaignUsingGet successfully', function(done) {
        //uncomment below and update the code to test getCampaignUsingGet
        //instance.getCampaignUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientCampaignAllUsingGet', function() {
      it('should call getClientCampaignAllUsingGet successfully', function(done) {
        //uncomment below and update the code to test getClientCampaignAllUsingGet
        //instance.getClientCampaignAllUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getClientCampaignUsingGet', function() {
      it('should call getClientCampaignUsingGet successfully', function(done) {
        //uncomment below and update the code to test getClientCampaignUsingGet
        //instance.getClientCampaignUsingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaignDataUsingPut', function() {
      it('should call updateCampaignDataUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateCampaignDataUsingPut
        //instance.updateCampaignDataUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaignPlanUsingPut', function() {
      it('should call updateCampaignPlanUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateCampaignPlanUsingPut
        //instance.updateCampaignPlanUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateCampaignUsingPut', function() {
      it('should call updateCampaignUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateCampaignUsingPut
        //instance.updateCampaignUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateClientCampaignUsingPut', function() {
      it('should call updateClientCampaignUsingPut successfully', function(done) {
        //uncomment below and update the code to test updateClientCampaignUsingPut
        //instance.updateClientCampaignUsingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
