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
    root.HydrogenNucleusApi.AggregationAccountHolding = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AggregationAccountHolding model module.
   * @module model/AggregationAccountHolding
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>AggregationAccountHolding</code>.
   * Aggregation Account Holding Object
   * @alias module:model/AggregationAccountHolding
   * @class
   * @param shares {Number} 
   * @param ticker {String} 
   * @param tickerName {String} 
   */
  var exports = function(shares, ticker, tickerName) {
    var _this = this;
















    _this['shares'] = shares;
    _this['ticker'] = ticker;
    _this['ticker_name'] = tickerName;

  };

  /**
   * Constructs a <code>AggregationAccountHolding</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AggregationAccountHolding} obj Optional instance to populate.
   * @return {module:model/AggregationAccountHolding} The populated <code>AggregationAccountHolding</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('aggregation_account_id')) {
        obj['aggregation_account_id'] = ApiClient.convertToType(data['aggregation_account_id'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
      }
      if (data.hasOwnProperty('asset_class')) {
        obj['asset_class'] = ApiClient.convertToType(data['asset_class'], 'String');
      }
      if (data.hasOwnProperty('cost_basis')) {
        obj['cost_basis'] = ApiClient.convertToType(data['cost_basis'], 'Number');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('currency_code')) {
        obj['currency_code'] = ApiClient.convertToType(data['currency_code'], 'String');
      }
      if (data.hasOwnProperty('cusip')) {
        obj['cusip'] = ApiClient.convertToType(data['cusip'], 'String');
      }
      if (data.hasOwnProperty('exchange')) {
        obj['exchange'] = ApiClient.convertToType(data['exchange'], 'String');
      }
      if (data.hasOwnProperty('holding_date')) {
        obj['holding_date'] = ApiClient.convertToType(data['holding_date'], 'Date');
      }
      if (data.hasOwnProperty('holding_type')) {
        obj['holding_type'] = ApiClient.convertToType(data['holding_type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('isin')) {
        obj['isin'] = ApiClient.convertToType(data['isin'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('shares')) {
        obj['shares'] = ApiClient.convertToType(data['shares'], 'Number');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
      if (data.hasOwnProperty('ticker_name')) {
        obj['ticker_name'] = ApiClient.convertToType(data['ticker_name'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * aggregationAccountId
   * @member {String} aggregation_account_id
   */
  exports.prototype['aggregation_account_id'] = undefined;
  /**
   * @member {Number} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} asset_class
   */
  exports.prototype['asset_class'] = undefined;
  /**
   * @member {Number} cost_basis
   */
  exports.prototype['cost_basis'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * @member {String} currency_code
   */
  exports.prototype['currency_code'] = undefined;
  /**
   * @member {String} cusip
   */
  exports.prototype['cusip'] = undefined;
  /**
   * @member {String} exchange
   */
  exports.prototype['exchange'] = undefined;
  /**
   * holdingDate
   * @member {Date} holding_date
   */
  exports.prototype['holding_date'] = undefined;
  /**
   * @member {String} holding_type
   */
  exports.prototype['holding_type'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * isin
   * @member {String} isin
   */
  exports.prototype['isin'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * @member {Number} shares
   */
  exports.prototype['shares'] = undefined;
  /**
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;
  /**
   * @member {String} ticker_name
   */
  exports.prototype['ticker_name'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;



  return exports;
}));


