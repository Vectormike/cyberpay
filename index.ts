/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import axios from 'axios';
import Payment from './resources/payment';
import Transaction from './resources/transaction';
import WalletTopUp from './resources/walletTopUp';
import Channels from './resources/channels';
import Bank from './resources/bank';


/**
 * @class CyberPay
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class CyberPay {
    payment= Payment;

    transaction = Transaction;

    walletTopUp = WalletTopUp

    channels = Channels

    bank = Bank


    /**
     *
     * @param options - integration key
     */
    constructor(options: {integrationKey: string}) {
      axios.defaults.headers.Authorization = `Bearer ${options.integrationKey}`;
      axios.defaults.headers['Content-Type'] = 'application/json';
      axios.defaults.baseURL = 'https://payment-api.cyberpay.ng/api/v1/';
    }
}

export default CyberPay;
