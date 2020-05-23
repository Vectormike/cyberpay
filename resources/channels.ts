/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved

import axios from 'axios';
import * as util from '../util';

/**
 * @class Channels
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class Channels {
  static endpoint = '/channels';

  /**
     * List all channels
     *
     */
  static async get() {
    return util.getResponse(axios.get(`${this.endpoint}`));
  }


  /**
     * List all active channels
     *
     */
  static async getActive() {
    return util.getResponse(axios.get(`${this.endpoint}/active`));
  }
}

export default Channels;
