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
    define(['ApiClient', 'model/PageWebhook', 'model/Webhook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PageWebhook'), require('../model/Webhook'));
  } else {
    // Browser globals (root is window)
    if (!root.HydrogenNucleusApi) {
      root.HydrogenNucleusApi = {};
    }
    root.HydrogenNucleusApi.WebhookApi = factory(root.HydrogenNucleusApi.ApiClient, root.HydrogenNucleusApi.PageWebhook, root.HydrogenNucleusApi.Webhook);
  }
}(this, function(ApiClient, PageWebhook, Webhook) {
  'use strict';

  /**
   * Webhook service.
   * @module api/WebhookApi
   * @version 1.7.0
   */

  /**
   * Constructs a new WebhookApi. 
   * @alias module:api/WebhookApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createWebhookUsingPost operation.
     * @callback module:api/WebhookApi~createWebhookUsingPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a webhook
     * One active webhook service is allowed at all times.
     * @param {module:model/Webhook} webhookRequest webhookRequest
     * @param {module:api/WebhookApi~createWebhookUsingPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    this.createWebhookUsingPost = function(webhookRequest, callback) {
      var postBody = webhookRequest;

      // verify the required parameter 'webhookRequest' is set
      if (webhookRequest === undefined || webhookRequest === null) {
        throw new Error("Missing the required parameter 'webhookRequest' when calling createWebhookUsingPost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebhookUsingDelete operation.
     * @callback module:api/WebhookApi~deleteWebhookUsingDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a webhook
     * Permanently delete a webhook for your firm. The webhook_id must be provided.
     * @param {String} webhookId UUID webhook_id
     * @param {module:api/WebhookApi~deleteWebhookUsingDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteWebhookUsingDelete = function(webhookId, callback) {
      var postBody = null;

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling deleteWebhookUsingDelete");
      }


      var pathParams = {
        'webhook_id': webhookId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = null;

      return this.apiClient.callApi(
        '/webhook/{webhook_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookAllUsingGet operation.
     * @callback module:api/WebhookApi~getWebhookAllUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PageWebhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all webhooks
     * Get information for all webhooks defined for your firm.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.ascending ascending (default to false)
     * @param {String} opts.filter filter
     * @param {String} opts.orderBy order_by (default to update_date)
     * @param {Number} opts.page page (default to 0)
     * @param {Number} opts.size size (default to 25)
     * @param {module:api/WebhookApi~getWebhookAllUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PageWebhook}
     */
    this.getWebhookAllUsingGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'ascending': opts['ascending'],
        'filter': opts['filter'],
        'order_by': opts['orderBy'],
        'page': opts['page'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = PageWebhook;

      return this.apiClient.callApi(
        '/webhook', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebhookUsingGet operation.
     * @callback module:api/WebhookApi~getWebhookUsingGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a webhook
     * Retrieve the information for a specific webhook. The webhook_id must be provided.
     * @param {String} webhookId UUID webhook_id
     * @param {module:api/WebhookApi~getWebhookUsingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    this.getWebhookUsingGet = function(webhookId, callback) {
      var postBody = null;

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling getWebhookUsingGet");
      }


      var pathParams = {
        'webhook_id': webhookId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = [];
      var accepts = ['*/*'];
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhook/{webhook_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateWebhookUsingPut operation.
     * @callback module:api/WebhookApi~updateWebhookUsingPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Webhook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a webhook
     * Update a webhook for your firm. The webhook_id must be provided
     * @param {module:model/Webhook} webhook webhook
     * @param {String} webhookId UUID webhook_id
     * @param {module:api/WebhookApi~updateWebhookUsingPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Webhook}
     */
    this.updateWebhookUsingPut = function(webhook, webhookId, callback) {
      var postBody = webhook;

      // verify the required parameter 'webhook' is set
      if (webhook === undefined || webhook === null) {
        throw new Error("Missing the required parameter 'webhook' when calling updateWebhookUsingPut");
      }

      // verify the required parameter 'webhookId' is set
      if (webhookId === undefined || webhookId === null) {
        throw new Error("Missing the required parameter 'webhookId' when calling updateWebhookUsingPut");
      }


      var pathParams = {
        'webhook_id': webhookId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json'];
      var accepts = ['*/*'];
      var returnType = Webhook;

      return this.apiClient.callApi(
        '/webhook/{webhook_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
