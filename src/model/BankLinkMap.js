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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.BankLinkMap = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BankLinkMap model module.
   * @module model/BankLinkMap
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>BankLinkMap</code>.
   * @alias module:model/BankLinkMap
   * @class
   * @param bankLinkId {String} bankLinkId
   * @param weight {Number} weight
   */
  var exports = function(bankLinkId, weight) {
    var _this = this;

    _this['bank_link_id'] = bankLinkId;
    _this['weight'] = weight;
  };

  /**
   * Constructs a <code>BankLinkMap</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BankLinkMap} obj Optional instance to populate.
   * @return {module:model/BankLinkMap} The populated <code>BankLinkMap</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bank_link_id')) {
        obj['bank_link_id'] = ApiClient.convertToType(data['bank_link_id'], 'String');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * bankLinkId
   * @member {String} bank_link_id
   */
  exports.prototype['bank_link_id'] = undefined;
  /**
   * weight
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;



  return exports;
}));


