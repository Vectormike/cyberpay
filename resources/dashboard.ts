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

class Dashboard {
  static endpoint = '/dashboard';

  /**
     * Get transactions from @dateFrom to @dateTo
     *
     */
  static async dashboardTransacByDate(options: DashboardOptions) {
    return util.getResponse(axios.get(`${this.endpoint}/transactions`, { params: options }));
  }


  /**
     * Get all status for transactions
     *
     */
  static async getDashboardTransacStatus() {
    return util.getResponse(axios.get(`${this.endpoint}/transactions/allstatus`));
  }
}

export default Dashboard;
