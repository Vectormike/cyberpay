/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import Transaction from './resources/transaction';


/**
 * @class CyberPay
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class CyberPay {
    transaction= Transaction;


    /**
     *
     * @param options - integration key
     */
    constructor(options: {IntegrationKey: string}) {
      axios.defaults.headers.Authorization = `Bearer ${options.IntegrationKey}`;
      axios.defaults.headers['Content-Type'] = 'application/json';
      axios.defaults.baseURL = 'https://merchant.cyberpay.ng/#/';
    }
}

export default CyberPay;
