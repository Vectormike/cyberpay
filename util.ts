/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from 'axios';

export const getResponse = async (call: Promise<AxiosResponse>) => {
  try {
    const response = await call;
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
