/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./supersim/V1');
import { CommandListInstance } from './supersim/v1/command';
import { FleetListInstance } from './supersim/v1/fleet';
import { SimListInstance } from './supersim/v1/sim';
import { UsageRecordListInstance } from './supersim/v1/usageRecord';


declare class Supersim extends Domain {
  /**
   * Initialize supersim domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly commands: CommandListInstance;
  readonly fleets: FleetListInstance;
  readonly sims: SimListInstance;
  readonly usageRecords: UsageRecordListInstance;
  readonly v1: V1;
}

export = Supersim;
