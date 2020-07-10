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
    root.HydrogenNucleusApi.AccountVO = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountVO model module.
   * @module model/AccountVO
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>AccountVO</code>.
   * @alias module:model/AccountVO
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>AccountVO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountVO} obj Optional instance to populate.
   * @return {module:model/AccountVO} The populated <code>AccountVO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_asset_size')) {
        obj['account_asset_size'] = ApiClient.convertToType(data['account_asset_size'], 'Number');
      }
      if (data.hasOwnProperty('account_asset_size_date')) {
        obj['account_asset_size_date'] = ApiClient.convertToType(data['account_asset_size_date'], 'Date');
      }
      if (data.hasOwnProperty('account_created_date')) {
        obj['account_created_date'] = ApiClient.convertToType(data['account_created_date'], 'Date');
      }
      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('account_name')) {
        obj['account_name'] = ApiClient.convertToType(data['account_name'], 'String');
      }
      if (data.hasOwnProperty('account_secondary_id')) {
        obj['account_secondary_id'] = ApiClient.convertToType(data['account_secondary_id'], 'String');
      }
      if (data.hasOwnProperty('account_type')) {
        obj['account_type'] = ApiClient.convertToType(data['account_type'], 'String');
      }
      if (data.hasOwnProperty('account_updated_date')) {
        obj['account_updated_date'] = ApiClient.convertToType(data['account_updated_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} account_asset_size
   */
  exports.prototype['account_asset_size'] = undefined;
  /**
   * @member {Date} account_asset_size_date
   */
  exports.prototype['account_asset_size_date'] = undefined;
  /**
   * @member {Date} account_created_date
   */
  exports.prototype['account_created_date'] = undefined;
  /**
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * @member {String} account_name
   */
  exports.prototype['account_name'] = undefined;
  /**
   * @member {String} account_secondary_id
   */
  exports.prototype['account_secondary_id'] = undefined;
  /**
   * @member {String} account_type
   */
  exports.prototype['account_type'] = undefined;
  /**
   * @member {Date} account_updated_date
   */
  exports.prototype['account_updated_date'] = undefined;



  return exports;
}));


