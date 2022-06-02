import axios from 'axios';

import { apiClientFactory } from '@vue-storefront/core';

import { getProduct } from './api/getProduct';
import { getProductList } from './api/getProductList';

import type { Setttings, Endpoints } from './types';

function onCreate(settings: Setttings) {
  const client = axios.create({
    baseURL: settings.api.url
  });

  return {
    config: settings,
    client
  };
}

const { createApiClient } = apiClientFactory<Setttings, Endpoints>({
  onCreate,
  api: {
    getProduct,
    getProductList
  }
});

export { createApiClient };
