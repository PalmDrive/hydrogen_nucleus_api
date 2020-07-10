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
    root.HydrogenNucleusApi.AccountType = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountType model module.
   * @module model/AccountType
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>AccountType</code>.
   * AccountType Object
   * @alias module:model/AccountType
   * @class
   * @param name {String} name
   */
  var exports = function(name) {
    var _this = this;








    _this['name'] = name;




  };

  /**
   * Constructs a <code>AccountType</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountType} obj Optional instance to populate.
   * @return {module:model/AccountType} The populated <code>AccountType</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('is_active')) {
        obj['is_active'] = ApiClient.convertToType(data['is_active'], 'Boolean');
      }
      if (data.hasOwnProperty('is_taxable')) {
        obj['is_taxable'] = ApiClient.convertToType(data['is_taxable'], 'Boolean');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('short_name')) {
        obj['short_name'] = ApiClient.convertToType(data['short_name'], 'String');
      }
      if (data.hasOwnProperty('subcategory')) {
        obj['subcategory'] = ApiClient.convertToType(data['subcategory'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * category
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * code
   * @member {String} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * isActive
   * @member {Boolean} is_active
   */
  exports.prototype['is_active'] = undefined;
  /**
   * isTaxable
   * @member {Boolean} is_taxable
   */
  exports.prototype['is_taxable'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * shortName
   * @member {String} short_name
   */
  exports.prototype['short_name'] = undefined;
  /**
   * subcategory
   * @member {String} subcategory
   */
  exports.prototype['subcategory'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


