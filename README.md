# CyberPay Node.js Library

[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=shield)](https://circleci.com/gh/circleci/circleci-docs)
![GitHub repo size](https://img.shields.io/github/repo-size/Vectormike/cyberpay)
![GitHub contributors](https://img.shields.io/github/contributors/Vectormike/cyberpay)
![Twitter Follow](https://img.shields.io/twitter/follow/Vectormike_?style=social)

<a href="https://www.npmjs.com/package/cyberpay" target="_blank"><img src="https://img.shields.io/npm/v/cyberpay.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/package/cyberpay" target="_blank"><img src="https://img.shields.io/npm/dm/cyberpay.svg" alt="NPM Downloads" /></a>

Nodejs API wrapper for [CyberPay](https://cyberpay.net.ng/).

This library provides access to the CyberPay API from applications written in server-side JavaScript.

## CyberPay Endpoints/Services exposed by the library

- Bank
- BankUSSD
- BillByWallet
- Biller
- BillPayment
- Business
- Channels
- Dashboard
- DirectDebit
- FundTransfer
- Integration
- MandateProduct
- NibssPaPlus
- Nip
- Partner
- Payment
- Payout
- Provider
- Transaction
- TSA
- WalletTopUp



## Installation

```sh
npm install cyberpay --save
#or 
yarn add cyberpay
```

## Usage
This package requires configuration with your account's secret key in the [CyberPay Dahboard](https://cyberpay.net.ng/)

Using ES modules and `async`/`await`:

```js
import CyberPay from 'cyberpay';

const cyberpay = new CyberPay({
    integrationKey: process.env.INTEGRATION_KEY,
});

try {
    const res = await cyberpay.payment.verify(transactionReference);
    // Verify payment
    if (res.status === 200) {
        // Successful
    }
} catch (err) {
    if (!err.response) {
        // No response from the server
        // Bad network
    } else {
        //  Response was returned from the server
        // ...
    }
}

```


## Contributing

- You can contribute by extending the README file to contain more examples and explanations of how to use the package.

## Authors

- [Victor Jonah](https://www.linkedin.com/in/victor-jonah/) 

## License

The code is available as open source under the terms of the
[MIT License](https://opensource.org/licenses/MIT)