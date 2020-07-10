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
    root.HydrogenNucleusApi.AccountHoldingVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountHoldingVO model module.
   * @module model/AccountHoldingVO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>AccountHoldingVO</code>.
   * @alias module:model/AccountHoldingVO
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>AccountHoldingVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountHoldingVO} obj Optional instance to populate.
   * @return {module:model/AccountHoldingVO} The populated <code>AccountHoldingVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_holding_date')) {
        obj['account_holding_date'] = ApiClient.convertToType(data['account_holding_date'], 'Date');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('security_asset_class')) {
        obj['security_asset_class'] = ApiClient.convertToType(data['security_asset_class'], 'String');
      }
      if (data.hasOwnProperty('security_category')) {
        obj['security_category'] = ApiClient.convertToType(data['security_category'], 'String');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('security_industry')) {
        obj['security_industry'] = ApiClient.convertToType(data['security_industry'], 'String');
      }
      if (data.hasOwnProperty('security_name')) {
        obj['security_name'] = ApiClient.convertToType(data['security_name'], 'String');
      }
      if (data.hasOwnProperty('security_sector')) {
        obj['security_sector'] = ApiClient.convertToType(data['security_sector'], 'String');
      }
      if (data.hasOwnProperty('security_ticker')) {
        obj['security_ticker'] = ApiClient.convertToType(data['security_ticker'], 'String');
      }
      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Date} account_holding_date
   */
  exports.prototype['account_holding_date'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} security_asset_class
   */
  exports.prototype['security_asset_class'] = undefined;
  /**
   * @member {String} security_category
   */
  exports.prototype['security_category'] = undefined;
  /**
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * @member {String} security_industry
   */
  exports.prototype['security_industry'] = undefined;
  /**
   * @member {String} security_name
   */
  exports.prototype['security_name'] = undefined;
  /**
   * @member {String} security_sector
   */
  exports.prototype['security_sector'] = undefined;
  /**
   * @member {String} security_ticker
   */
  exports.prototype['security_ticker'] = undefined;
  /**
   * @member {Number} shares
   */
  exports.prototype['shares'] = undefined;
  /**
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;



  return exports;
}));

