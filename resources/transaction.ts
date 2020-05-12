import axios from 'axios';
import * as util from '../util';

/**
 * @class Transaction
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://merchant.cyberpay.ng/#/}
 *  {@link https: API Docs}
 */

class Transaction {
  static endpoint = '/payments';

  /**
     * Set up transaction
     * @param {TransOptions} options
     */
  static async setup(options: TransOptions) {
    return util.getResponse(axios.post(`${this.endpoint}`, options));
  }


  /**
     * Verify a transaction
     * @param {TransOptions} options
     */
  static async verify(transactionReference: string) {
    return util.getResponse(axios.get(`${this.endpoint}/${transactionReference}`));
  }
}
export default Transaction;
