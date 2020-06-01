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

// The key is supplied from package.json under the scripts command
const cyberpay = new CyberPay({
  integrationKey: process.env.Integration_Key as string,
});


describe('Transaction tests', () => {
  // Make Payment
  it('Set transacton', async () => {
    try {
      const res = await cyberpay.payment.pay({
        currency: 'NGN',
        amount,
        description: 'as discuss',
        merchantRef: reference,
        splits: [{
          amount
        }]
      });
      assert.strictEqual(res.succeeded, true);
      expect(res.data).to.have.property('transactionReference');
    } catch (error) {
      return error;
    }
  });

  // Pay with token
  it('Pay with token', async () => {
    try {
      const res = await cyberpay.payment.paywithtoken({
        amount,
        splits: [{
          amount
        }]
      });
      assert.strictEqual(res.succeeded, true);
      expect(res.data).to.have.property('transactionReference');
    } catch (error) {
      return error;
    }
  });

  // Pay with bank
  it('Pay wth bank', async () => {
    try {
      const res = await cyberpay.payment.paywithbank({
        bankCode: faker.random.alphaNumeric(),
        accountNumber: faker.finance.account(),
        reference
      });
      assert.strictEqual(res.succeeded, true);
    } catch (error) {
      return error;
    }
  });


  it('Pay wth card', async () => {
    try {
      const res = await cyberpay.payment.paywithcard({
        expiryMonth: faker.date.month(),
        expiryYear: '2020',
        cardNumber: '555644454777899',
        cvv: '160',
        reference
      });
      assert.strictEqual(res.succeeded, true);
    } catch (error) {
      return error;
    }
  });

  // Verify a payment
  it('Get transaction', async () => {
    try {
      const res = await cyberpay.payment.verify(reference);
      assert.strictEqual(res.succeeded, true);
      expect(res.data).to.have.property('reference');
    } catch (error) {
      return error;
    }
  });

  // Create Payment page
  it('Create Payment page', async () => {
    try {
      const res = await cyberpay.payment.createpage({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        phone: faker.phone.phoneNumber(),
        amount: faker.random.number(),
        email: faker.internet.email(),
        page: faker.random.number()
      });
      if (res) {
        assert.strictEqual(res.succeeded, true);
        expect(res.data).to.have.property('transactionReference');
      }
    } catch (error) {
      return error;
    }
  });
});
