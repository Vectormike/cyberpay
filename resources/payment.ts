import axios from 'axios';
import * as util from '../util';

/**
 * @class Transaction
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://merchant.cyberpay.ng/#/}
 *  {@link https: API Docs}
 */

class Payment {
  static endpoint = '/payments';

  /**
     * Set up transaction
     * @param {PaymentOptions} options
     */
  static async setup(options: PaymentOptions) {
    return util.getResponse(axios.post(`${this.endpoint}`, options));
  }


  /**
     * Verify a transaction
     * @param {PaymentOptions} options
     */
  static async verify(transactionReference: string) {
    return util.getResponse(axios.get(`${this.endpoint}/${transactionReference}`));
  }

  /**
     * Create Payment Page
     * @param {PaymentOptions} options
     */
  static async createpage(options: PaymentPageOptions) {
    return util.getResponse(axios.post(`${this.endpoint}/page/advice`, options));
  }
}
export default Payment;
