import { PhemexOrderResponse } from '../models/PhemexOrderResponse';
import axios, { AxiosRequestConfig } from 'axios';
import _ from 'lodash';
import { DateTime } from 'luxon';
import { API_CONSTANTS } from '../consts/Constants';
import CryptoJS from 'crypto-js';
import { PhemexPositionResponse } from '../models/PhemexPositionResponse';

export class PhemexApi {
  getSignature(action: string, timeout: number): string {
    let hmacMessage = `${action.replace('?', '')}${timeout}`;
    return CryptoJS.HmacSHA256(hmacMessage, API_CONSTANTS.clientSecret).toString();
  }

  async getOrders(limit: number, offset: number): Promise<PhemexOrderResponse> {
    var action = API_CONSTANTS.getOrdersAction;

    if (_.isNumber(limit)) {
      action += `&limit=${limit}`;
    }

    if (_.isNumber(offset)) {
      action += `&offset=${offset}`;
    }

    let timeout = DateTime.now().plus({ seconds: 1 }).valueOf();
    let reqOpts: AxiosRequestConfig = {
      baseURL: API_CONSTANTS.baseUrl,
      url: action,
      method: 'GET',
      headers: {
        'x-phemex-request-expiry': timeout,
        'x-phemex-access-token': API_CONSTANTS.clientId,
        'x-phemex-request-signature': this.getSignature(action, timeout),
      },
      responseType: 'json',
    };

    var response = await axios(reqOpts);
    return response.data;
  }

  async getPositions(): Promise<PhemexPositionResponse> {
    let action = API_CONSTANTS.getPositionAction;
    let timeout = DateTime.now().plus({ seconds: 1 }).valueOf();
    let reqOpts: AxiosRequestConfig = {
      baseURL: API_CONSTANTS.baseUrl,
      url: action,
      method: 'GET',
      headers: {
        'x-phemex-request-expiry': timeout,
        'x-phemex-access-token': API_CONSTANTS.clientId,
        'x-phemex-request-signature': this.getSignature(action, timeout),
      },
      responseType: 'json',
    };

    var response = await axios(reqOpts);
    return response.data;
  }
}
