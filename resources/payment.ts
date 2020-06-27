/* eslint-disable import/extensions */
import axios from 'axios';
// eslint-disable-next-line import/no-unresolved
import * as util from '../util';

/**
 * @class Payment
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class Payment {
  static endpoint = '/payments';

  /**
     * Set up transaction
     * @param {PaymentOptions} options
     */
  static async pay(options: PaymentOptions) {
    return util.getResponse(axios.post(`${this.endpoint}`, options));
  }

  /**
     * Pay with token
     * @param {PaymentWithTokenOptions} options
     */
  static async paywithtoken(options: PaymentWithTokenOptions) {
    return util.getResponse(axios.post(`${this.endpoint}/paywithtoken`, options));
  }

  /**
     * Pay with token by charge
     * @param
     */
  static async paywithtokencharge(reference: string) {
    return util.getResponse(axios.post(`${this.endpoint}/paywithtoken/charge`));
  }


  /**
     * Payment by Card
     * @param {PaymentWithCardOptions} options
     */
  static async paywithcard(options: PaymentWithCardOptions) {
    return util.getResponse(axios.post(`${this.endpoint}/card`, options));
  }

  /**
     * Pay with bank
     * @param {PaymentWithBankOptions} options
     */
  static async paywithbank(options: PaymentWithBankOptions) {
    return util.getResponse(axios.post(`${this.endpoint}/bank`, options));
  }


  /**
     * Refund
     * @param {transactionId} options
     */
  static async refund(transactionId: number) {
    return util.getResponse(axios.get(`${this.endpoint}/refund/${transactionId}`));
  }


  /**
     * Verify a payment
     * @param {transactionReference} options
     */
  static async verify(transactionReference: string) {
    return util.getResponse(axios.get(`${this.endpoint}/${transactionReference}`));
  }

  /**
     * Create Payment Page
     * @param {PaymentPageOptions} options
     */
  static async createpage(options: PaymentPageOptions) {
    return util.getResponse(axios.post(`${this.endpoint}/page/advice`, options));
  }
}
export default Payment;
