'use strict';

var _ = require('lodash');
var Instance = require('../../../../base');
var InstanceContext = require('../../../../base/InstanceContext');
var values = require('../../../../base/values');

/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique connect-app Sid
 *
 * @returns {ConnectAppContext}
 */
function ConnectAppContext(version, accountSid, sid) {
  InstanceContext.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template('/Accounts/<% account_sid %>/ConnectApps/<% sid %>.json', this._solution);
}

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppContext.prototype.fetch = function fetch(self) {
  var params = values.of({});

  var payload = this._version.fetch(
    'GET',
    self._uri,
    params=params,
  );

  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid,
  );
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] - URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] - HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] - URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] - The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppContext.prototype.update = function update(self, opts) {
  var data = values.of({
    'Authorizeredirecturl': authorizeRedirectUrl,
    'Companyname': companyName,
    'Deauthorizecallbackmethod': deauthorizeCallbackMethod,
    'Deauthorizecallbackurl': deauthorizeCallbackUrl,
    'Description': description,
    'Friendlyname': friendlyName,
    'Homepageurl': homepageUrl,
    'Permissions': permissions,
  });

  var payload = this._version.update(
    'POST',
    self._uri,
    data=data,
  );

  return new ConnectAppInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};


function ConnectAppInstance() {
}

Object.defineProperty(ConnectAppInstance.prototype, '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new ConnectAppContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    return this._context;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'authorizeRedirectUrl', {
  get: function() {
    return this._properties.authorizeRedirectUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'companyName', {
  get: function() {
    return this._properties.companyName;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'deauthorizeCallbackMethod', {
  get: function() {
    return this._properties.deauthorizeCallbackMethod;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'deauthorizeCallbackUrl', {
  get: function() {
    return this._properties.deauthorizeCallbackUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'description', {
  get: function() {
    return this._properties.description;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'homepageUrl', {
  get: function() {
    return this._properties.homepageUrl;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'permissions', {
  get: function() {
    return this._properties.permissions;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(ConnectAppInstance.prototype, 'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Initialize the ConnectAppContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique connect-app Sid
 *
 * @returns {ConnectAppContext}
 */
ConnectAppInstance.prototype.ConnectAppInstance = function
    ConnectAppInstance(version, payload, accountSid, sid) {
  Instance.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
      accountSid: payload.account_sid,
      authorizeRedirectUrl: payload.authorize_redirect_url,
      companyName: payload.company_name,
      deauthorizeCallbackMethod: payload.deauthorize_callback_method,
      deauthorizeCallbackUrl: payload.deauthorize_callback_url,
      description: payload.description,
      friendlyName: payload.friendly_name,
      homepageUrl: payload.homepage_url,
      permissions: payload.permissions,
      sid: payload.sid,
      uri: payload.uri,
  };

  // Context
  this._context = None;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
};

/**
 * Fetch a ConnectAppInstance
 *
 * @returns Fetched ConnectAppInstance
 */
ConnectAppInstance.prototype.fetch = function fetch(self) {
  return this._proxy.fetch();
};

/**
 * Update the ConnectAppInstance
 *
 * @param string [opts.authorizeRedirectUrl] - URIL Twilio sends requests when users authorize
 * @param string [opts.companyName] - The company name set for this Connect App.
 * @param string [opts.deauthorizeCallbackMethod] - HTTP method Twilio WIll use making requests to the url
 * @param string [opts.deauthorizeCallbackUrl] - URL Twilio will send a request when a user de-authorizes this app
 * @param string [opts.description] - A more detailed human readable description
 * @param string [opts.friendlyName] - A human readable name for the Connect App.
 * @param string [opts.homepageUrl] - The URL users can obtain more information
 * @param connect_app.permission [opts.permissions] - The set of permissions that your ConnectApp requests.
 *
 * @returns Updated ConnectAppInstance
 */
ConnectAppInstance.prototype.update = function update(self, opts) {
  return this._proxy.update(
    opts
  );
};
