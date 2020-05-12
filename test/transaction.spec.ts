/* eslint-disable consistent-return */
/* eslint-disable comma-dangle */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import { assert, expect } from 'chai';
import faker from 'faker';
import CyberPay from '../index';

const reference: string = faker.random.alphaNumeric(9);

// The key is supplied from package.json under the scripts command
const cyberpay = new CyberPay({
  IntegrationKey: process.env.Integration_Key as string,
});


describe('Transaction tests', () => {
  // Set Transaction
  it('Set transacton', async () => {
    try {
      const res = await cyberpay.transaction.setup({
        Currency: 'NGN',
        Amount: faker.random.number(),
        Description: 'as discuss',
        MerchantRef: reference
      });
      assert.strictEqual(res.succeeded, true);
      expect(res.data).to.have.property('transactionReference');
    } catch (error) {
      return error;
    }
  });

  // Verify a transacton
  it('Get transaction', async () => {
    try {
      const res = await cyberpay.transaction.verify(reference);
      assert.strictEqual(res.succeeded, true);
      expect(res.data).to.have.property('reference');
    } catch (error) {
      return error;
    }
  });
});
