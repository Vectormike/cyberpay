import axios from 'axios';
import * as util from '../util';


/**
 * @class WalletTopUp
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://payment-api.cyberpay.ng/api/v1/}
 *  {@link https: API Docs}
 */

class WalletTopUp {
    static endpoint = '/wallettopup';

    /**
       * Wallet topup
       * @param {WalletTopUpOptions} options
       */
    static async walletTopUp(options: WalletTopUpOptions) {
      return util.getResponse(axios.post(`${this.endpoint}`, options));
    }


    /**
       * Top up another wallet
       * @param {TopUpAnotherWalletOptions} options
       */
    static async topUpAnotherWallet(options: TopUpAnotherWalletOptions) {
      return util.getResponse(axios.post(`${this.endpoint}`, options));
    }
}

export default WalletTopUp;
