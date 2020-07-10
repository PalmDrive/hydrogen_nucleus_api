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
    root.HydrogenNucleusApi.Score = factory(root.HydrogenNucleusApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Score model module.
   * @module model/Score
   * @version 1.7.0
   */

  /**
   * Constructs a new <code>Score</code>.
   * Score Object
   * @alias module:model/Score
   * @class
   * @param scoreType {module:model/Score.ScoreTypeEnum} scoreType
   * @param scoreValue {String} scoreValue
   */
  var exports = function(scoreType, scoreValue) {
    var _this = this;












    _this['score_type'] = scoreType;
    _this['score_value'] = scoreValue;



  };

  /**
   * Constructs a <code>Score</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Score} obj Optional instance to populate.
   * @return {module:model/Score} The populated <code>Score</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('account_id')) {
        obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
      }
      if (data.hasOwnProperty('allocation_id')) {
        obj['allocation_id'] = ApiClient.convertToType(data['allocation_id'], 'String');
      }
      if (data.hasOwnProperty('benchmark_id')) {
        obj['benchmark_id'] = ApiClient.convertToType(data['benchmark_id'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('create_date')) {
        obj['create_date'] = ApiClient.convertToType(data['create_date'], 'Date');
      }
      if (data.hasOwnProperty('goal_id')) {
        obj['goal_id'] = ApiClient.convertToType(data['goal_id'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('model_id')) {
        obj['model_id'] = ApiClient.convertToType(data['model_id'], 'String');
      }
      if (data.hasOwnProperty('portfolio_id')) {
        obj['portfolio_id'] = ApiClient.convertToType(data['portfolio_id'], 'String');
      }
      if (data.hasOwnProperty('score_time_stamp')) {
        obj['score_time_stamp'] = ApiClient.convertToType(data['score_time_stamp'], 'Date');
      }
      if (data.hasOwnProperty('score_type')) {
        obj['score_type'] = ApiClient.convertToType(data['score_type'], 'String');
      }
      if (data.hasOwnProperty('score_value')) {
        obj['score_value'] = ApiClient.convertToType(data['score_value'], 'String');
      }
      if (data.hasOwnProperty('secondary_id')) {
        obj['secondary_id'] = ApiClient.convertToType(data['secondary_id'], 'String');
      }
      if (data.hasOwnProperty('security_id')) {
        obj['security_id'] = ApiClient.convertToType(data['security_id'], 'String');
      }
      if (data.hasOwnProperty('update_date')) {
        obj['update_date'] = ApiClient.convertToType(data['update_date'], 'Date');
      }
    }
    return obj;
  }

  /**
   * accountId
   * @member {String} account_id
   */
  exports.prototype['account_id'] = undefined;
  /**
   * allocationId
   * @member {String} allocation_id
   */
  exports.prototype['allocation_id'] = undefined;
  /**
   * benchmarkId
   * @member {String} benchmark_id
   */
  exports.prototype['benchmark_id'] = undefined;
  /**
   * clientId
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * @member {Date} create_date
   */
  exports.prototype['create_date'] = undefined;
  /**
   * goalId
   * @member {String} goal_id
   */
  exports.prototype['goal_id'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * metadata
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * modelId
   * @member {String} model_id
   */
  exports.prototype['model_id'] = undefined;
  /**
   * portfolioId
   * @member {String} portfolio_id
   */
  exports.prototype['portfolio_id'] = undefined;
  /**
   * @member {Date} score_time_stamp
   */
  exports.prototype['score_time_stamp'] = undefined;
  /**
   * scoreType
   * @member {module:model/Score.ScoreTypeEnum} score_type
   */
  exports.prototype['score_type'] = undefined;
  /**
   * scoreValue
   * @member {String} score_value
   */
  exports.prototype['score_value'] = undefined;
  /**
   * @member {String} secondary_id
   */
  exports.prototype['secondary_id'] = undefined;
  /**
   * securityId
   * @member {String} security_id
   */
  exports.prototype['security_id'] = undefined;
  /**
   * @member {Date} update_date
   */
  exports.prototype['update_date'] = undefined;


  /**
   * Allowed values for the <code>score_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ScoreTypeEnum = {
    /**
     * value: "[goal_achievement_score"
     * @const
     */
    "[goal_achievement_score": "[goal_achievement_score",
    /**
     * value: "portfolio_optimization_score"
     * @const
     */
    "portfolio_optimization_score": "portfolio_optimization_score",
    /**
     * value: "credit_score"
     * @const
     */
    "credit_score": "credit_score",
    /**
     * value: "dimensional_risk_score"
     * @const
     */
    "dimensional_risk_score": "dimensional_risk_score",
    /**
     * value: "diversification_score"
     * @const
     */
    "diversification_score": "diversification_score",
    /**
     * value: "risk_score]"
     * @const
     */
    "risk_score]": "risk_score]"  };


  return exports;
}));


