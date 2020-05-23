## CyberPay  
![Success](https://img.shields.io/badge/Build-success-success.svg?logo=github&logoColor=white)

Nodejs API wrapper for [CyberPay](https://cyberpay.net.ng/).

### Table of content

- [CyberPay](#cyberpay)
  - [Table of content](#table-of-content)
  - [Installation](#installation)
  - [Usage](#usage)

### Installation

```npm install cyberpay
```

### Usage

```js
const CyberPay = require('cyberpay');

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