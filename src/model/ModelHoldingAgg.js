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
    root.HydrogenNucleusApi.ModelHoldingAgg = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelHoldingAgg model module.
   * @module model/ModelHoldingAgg
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>ModelHoldingAgg</code>.
   * ModelHoldingAgg Object
   * @alias module:model/ModelHoldingAgg
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ModelHoldingAgg</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelHoldingAgg} obj Optional instance to populate.
   * @return {module:model/ModelHoldingAgg} The populated <code>ModelHoldingAgg</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('asset_class')) {
        obj['asset_class'] = ApiClient.convertToType(data['asset_class'], 'String');
      }
      if (data.hasOwnProperty('current_weight')) {
        obj['current_weight'] = ApiClient.convertToType(data['current_weight'], 'Number');
      }
      if (data.hasOwnProperty('securities_id')) {
        obj['securities_id'] = ApiClient.convertToType(data['securities_id'], 'Number');
      }
      if (data.hasOwnProperty('strategic_weight')) {
        obj['strategic_weight'] = ApiClient.convertToType(data['strategic_weight'], 'Number');
      }
      if (data.hasOwnProperty('ticker')) {
        obj['ticker'] = ApiClient.convertToType(data['ticker'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} asset_class
   */
  exports.prototype['asset_class'] = undefined;
  /**
   * @member {Number} current_weight
   */
  exports.prototype['current_weight'] = undefined;
  /**
   * @member {Number} securities_id
   */
  exports.prototype['securities_id'] = undefined;
  /**
   * @member {Number} strategic_weight
   */
  exports.prototype['strategic_weight'] = undefined;
  /**
   * @member {String} ticker
   */
  exports.prototype['ticker'] = undefined;



  return exports;
}));


