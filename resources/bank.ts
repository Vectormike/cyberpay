/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import axios from 'axios';
import * as util from '../util';

/**
 * @class Bank
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class Banks {
  static endpoint = '/banks';

  /**
     * List of all banks integrated
     *
     */
  static async getBanks() {
    return util.getResponse(axios.get(`${this.endpoint}`));
  }

  /**
     *
     *
     */
  static async getAllBanks() {
    return util.getResponse(axios.get(`${this.endpoint}/all`));
  }
}

export default Banks;
