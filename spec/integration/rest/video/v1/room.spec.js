'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Room', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms('RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://video.twilio.com/v1/Rooms/<%= sid %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'peer-to-peer',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'unique_name',
          'max_participants': 10,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': '',
          'record_participants_on_connect': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms('RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms.create();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://video.twilio.com/v1/Rooms';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'in-progress',
          'type': 'peer-to-peer',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'max_participants': 10,
          'duration': 0,
          'status_callback_method': 'POST',
          'status_callback': '',
          'record_participants_on_connect': false,
          'end_time': '2015-07-30T20:00:00Z',
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(201, body));

      var promise = client.video.v1.rooms.create();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.video.v1.rooms.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var url = 'https://video.twilio.com/v1/Rooms';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'rooms': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_with_status response',
    function() {
      var body = JSON.stringify({
          'rooms': [
              {
                  'sid': 'RM4070b618362c1682b2385b1f9982833c',
                  'status': 'completed',
                  'date_created': '2017-04-03T22:21:49Z',
                  'date_updated': '2017-04-03T22:21:51Z',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'type': 'peer-to-peer',
                  'enable_turn': true,
                  'unique_name': 'RM4070b618362c1682b2385b1f9982833c',
                  'status_callback': null,
                  'status_callback_method': 'POST',
                  'end_time': '2017-04-03T22:21:51Z',
                  'duration': 2,
                  'max_participants': 10,
                  'record_participants_on_connect': false,
                  'url': 'https://video.twilio.com/v1/Rooms/RM4070b618362c1682b2385b1f9982833c'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://video.twilio.com/v1/Rooms?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://video.twilio.com/v1/Rooms?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'rooms'
          }
      });

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.rooms.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        status: 'in-progress'
      };
      var promise = client.video.v1.rooms('RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        sid: 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://video.twilio.com/v1/Rooms/<%= sid %>')(solution);

      var values = {
        Status: 'in-progress',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'status': 'completed',
          'type': 'peer-to-peer',
          'sid': 'RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'enable_turn': true,
          'unique_name': 'unique_name',
          'max_participants': 10,
          'status_callback_method': 'POST',
          'status_callback': '',
          'record_participants_on_connect': false,
          'end_time': '2015-07-30T20:00:00Z',
          'duration': 10,
          'url': 'https://video.twilio.com/v1/Rooms/RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      });

      holodeck.mock(new Response(200, body));

      var opts = {
        status: 'in-progress'
      };
      var promise = client.video.v1.rooms('RMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa').update(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

