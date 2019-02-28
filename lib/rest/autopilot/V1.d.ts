/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Autopilot = require('../Autopilot');
import Version = require('../../base/Version');
import { AssistantList } from './v1/assistant';
import { AssistantListInstance } from './v1/assistant';


declare class V1 extends Version {
  /**
   * Initialize the V1 version of Autopilot
   *
   * @param domain - The twilio domain
   */
  constructor(domain: Autopilot);

  readonly assistants: AssistantListInstance;
}

export = V1;