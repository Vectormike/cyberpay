import axios from "axios";
import Transaction from "./resources/transaction";


/**
 * @class CyberPay
 *
 * CyberPay wrapper for communicating with CyberPay's API.
 *  {@link https://merchant.cyberpay.ng/#/}
 *  {@link https: API Docs}
 */

 class CyberPay {
    transaction= Transaction;



    /**
     *
     * @param options - integration key
     */
    constructor(options: {integrationKey: string; businessName: string; businessCode: string}){
        axios.defaults.headers.Authorization = `Bearer ${options.integrationKey}`;
        axios.defaults.headers["Content-Type"]= "application/json";
        axios.defaults.baseURL= "https://merchant.cyberpay.ng/#/";
    }
 }

 export default CyberPay;