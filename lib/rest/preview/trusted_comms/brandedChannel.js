'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var ChannelList = require('./brandedChannel/channel').ChannelList;
var Page = require('../../../base/Page');  /* jshint ignore:line */
var values = require('../../../base/values');  /* jshint ignore:line */

var BrandedChannelList;
var BrandedChannelPage;
var BrandedChannelInstance;
var BrandedChannelContext;

/* jshint ignore:start */
/**
 * Initialize the BrandedChannelList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelList
 *
 * @param {Twilio.Preview.TrustedComms} version - Version of the resource
 */
/* jshint ignore:end */
BrandedChannelList = function BrandedChannelList(version) {
  /* jshint ignore:start */
  /**
   * @function brandedChannels
   * @memberof Twilio.Preview.TrustedComms#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Preview.TrustedComms.BrandedChannelContext}
   */
  /* jshint ignore:end */
  function BrandedChannelListInstance(sid) {
    return BrandedChannelListInstance.get(sid);
  }

  BrandedChannelListInstance._version = version;
  // Path Solution
  BrandedChannelListInstance._solution = {};
  /* jshint ignore:start */
  /**
   * Constructs a branded_channel
   *
   * @function get
   * @memberof Twilio.Preview.TrustedComms.BrandedChannelList#
   *
   * @param {string} sid - Branded Channel Sid.
   *
   * @returns {Twilio.Preview.TrustedComms.BrandedChannelContext}
   */
  /* jshint ignore:end */
  BrandedChannelListInstance.get = function get(sid) {
    return new BrandedChannelContext(this._version, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Preview.TrustedComms.BrandedChannelList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  BrandedChannelListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  BrandedChannelListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return BrandedChannelListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the BrandedChannelPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelPage
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {BrandedChannelSolution} solution - Path solution
 *
 * @returns BrandedChannelPage
 */
/* jshint ignore:end */
BrandedChannelPage = function BrandedChannelPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(BrandedChannelPage.prototype, Page.prototype);
BrandedChannelPage.prototype.constructor = BrandedChannelPage;

/* jshint ignore:start */
/**
 * Build an instance of BrandedChannelInstance
 *
 * @function getInstance
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelPage#
 *
 * @param {BrandedChannelPayload} payload - Payload response from the API
 *
 * @returns BrandedChannelInstance
 */
/* jshint ignore:end */
BrandedChannelPage.prototype.getInstance = function getInstance(payload) {
  return new BrandedChannelInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
BrandedChannelPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

BrandedChannelPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the BrandedChannelContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelInstance
 *
 * @property {string} accountSid - Account Sid.
 * @property {string} businessSid - Business Sid.
 * @property {string} brandSid - Brand Sid.
 * @property {string} sid - Branded Channel Sid.
 * @property {string} links - Nested resource URLs.
 * @property {string} url - The URL of this resource.
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {BrandedChannelPayload} payload - The instance payload
 * @param {sid} sid - Branded Channel Sid.
 */
/* jshint ignore:end */
BrandedChannelInstance = function BrandedChannelInstance(version, payload, sid)
                                                          {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.businessSid = payload.business_sid; // jshint ignore:line
  this.brandSid = payload.brand_sid; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid || this.sid, };
};

Object.defineProperty(BrandedChannelInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new BrandedChannelContext(this._version, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a BrandedChannelInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed BrandedChannelInstance
 */
/* jshint ignore:end */
BrandedChannelInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Access the channels
 *
 * @function channels
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelInstance#
 *
 * @returns {Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelList}
 */
/* jshint ignore:end */
BrandedChannelInstance.prototype.channels = function channels() {
  return this._proxy.channels;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
BrandedChannelInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

BrandedChannelInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the BrandedChannelContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Preview.TrustedComms.BrandedChannelContext
 *
 * @property {Twilio.Preview.TrustedComms.BrandedChannelContext.ChannelList} channels -
 *          channels resource
 *
 * @param {TrustedComms} version - Version of the resource
 * @param {sid} sid - Branded Channel Sid.
 */
/* jshint ignore:end */
BrandedChannelContext = function BrandedChannelContext(version, sid) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, };
  this._uri = `/BrandedChannels/${sid}`;

  // Dependents
  this._channels = undefined;
};

/* jshint ignore:start */
/**
 * fetch a BrandedChannelInstance
 *
 * @function fetch
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed BrandedChannelInstance
 */
/* jshint ignore:end */
BrandedChannelContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new BrandedChannelInstance(this._version, payload, this._solution.sid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(BrandedChannelContext.prototype,
  'channels', {
    get: function() {
      if (!this._channels) {
        this._channels = new ChannelList(this._version, this._solution.sid);
      }
      return this._channels;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Preview.TrustedComms.BrandedChannelContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
BrandedChannelContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

BrandedChannelContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  BrandedChannelList: BrandedChannelList,
  BrandedChannelPage: BrandedChannelPage,
  BrandedChannelInstance: BrandedChannelInstance,
  BrandedChannelContext: BrandedChannelContext
};
