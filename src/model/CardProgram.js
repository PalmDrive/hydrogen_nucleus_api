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
    root.HydrogenNucleusApi.CardProgram = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CardProgram model module.
   * @module model/CardProgram
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>CardProgram</code>.
   * CardProgram Object
   * @alias module:model/CardProgram
   * @class
   * @param cardIssuer {String} cardIssuer
   * @param cardNetwork {String} cardNetwork
   * @param cardProcessor {String} cardProcessor
   * @param cardType {String} cardType
   * @param issuingBank {String} issuingBank
   * @param name {String} name
   */
  var exports = function(cardIssuer, cardNetwork, cardProcessor, cardType, issuingBank, name) {
    var _this = this;

    _this['card_issuer'] = cardIssuer;
    _this['card_network'] = cardNetwork;
    _this['card_processor'] = cardProcessor;
    _this['card_type'] = cardType;





    _this['issuing_bank'] = issuingBank;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>CardProgram</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CardProgram} obj Optional instance to populate.
   * @return {module:model/CardProgram} The populated <code>CardProgram</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('card_issuer')) {
        obj['card_issuer'] = ApiClient.convertToType(data['card_issuer'], 'String');
      }
      if (data.hasOwnProperty('card_network')) {
        obj['card_network'] = ApiClient.convertToType(data['card_network'], 'String');
      }
      if (data.hasOwnProperty('card_processor')) {
        obj['card_processor'] = ApiClient.convertToType(data['card_processor'], 'String');
      }
      if (data.hasOwnProperty('card_type')) {
        obj['card_type'] = ApiClient.convertToType(data['card_type'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('issuing_bank')) {
        obj['issuing_bank'] = ApiClient.convertToType(data['issuing_bank'], 'String');
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
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * cardIssuer
   * @member {String} card_issuer
   */
  exports.prototype['card_issuer'] = undefined;
  /**
   * cardNetwork
   * @member {String} card_network
   */
  exports.prototype['card_network'] = undefined;
  /**
   * cardProcessor
   * @member {String} card_processor
   */
  exports.prototype['card_processor'] = undefined;
  /**
   * cardType
   * @member {String} card_type
   */
  exports.prototype['card_type'] = undefined;
  /**
   * clientId
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
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
   * description
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * issuingBank
   * @member {String} issuing_bank
   */
  exports.prototype['issuing_bank'] = undefined;
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
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


