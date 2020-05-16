/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import * as util from '../util';


/**
 * @class Transaction
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class Transaction {
    static endpoint = '/transactions';

    /**
       * Get transaction by reference
       * @param {TransactionsOptions} options
       */
    static async get(options: TransactionsOptions) {
      return util.getResponse(axios.get(`${this.endpoint}`, { params: options }));
    }


    /**
       * Get transaction by merchant reference
       * @param {merchantRef} options
       */
    static async getByMerchantRef(merchantRef: string) {
      return util.getResponse(axios.get(`${this.endpoint}/transactionbymerchantref/${merchantRef}`));
    }


    /**
       * Get transaction by reference number
       * @param {transactionNumber} options
       */
    static async getByTransactionRef(referenceNumber: string) {
      return util.getResponse(axios.get(`${this.endpoint}/transactionsbyreference/${referenceNumber}`));
    }
}

export default Transaction;
