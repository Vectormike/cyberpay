/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */

import { assert, expect } from 'chai';
import faker from 'faker';
import CyberPay from '../index';

const reference: string = faker.random.alphaNumeric(9);
const amount: number = faker.random.number();
const walletId = '6565464';


// The key is supplied from package.json under the scripts command
const cyberpay = new CyberPay({
  integrationKey: process.env.Integration_Key as string,
});

describe('WalletTopUp tests', () => {
  // Wallet top up
  it('Wallet top up', async () => {
    try {
      const res = await cyberpay.walletTopUp.walletTopUp({
        merchantRef: reference,
        amount,
        walletId,
        returnUrl: 'www.cyberpay.ng'
      });
      assert.strictEqual(res.succeeded, true);
    } catch (error) {
      return error;
    }

    // Fund another wallet
    it('Fund another wallet', async () => {
      try {
        const res = await cyberpay.walletTopUp.topUpAnotherWallet({
          amount,
          businessWalletId: 'ggh5',
          topUpWalletId: walletId,
          businessCode: '25'
        });
        assert.strictEqual(res.succeeded, true);
      } catch (error) {
        return error;
      }
    });
  });
});
