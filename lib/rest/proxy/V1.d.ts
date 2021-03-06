/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Proxy = require('../Proxy');
import Version = require('../../base/Version');
import { ServiceList } from './v1/service';
import { ServiceListInstance } from './v1/service';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Proxy
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Proxy);

  readonly services: ServiceListInstance;
}

export = V1;
