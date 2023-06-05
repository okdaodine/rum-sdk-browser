export * from './cache/types';
export * from './chain/types';
export * from './utils/types';

import * as cache from './cache';
import * as chain from './chain';
import * as utils from './utils';

import { interceptAxios } from './utils/interceptAxios';
interceptAxios();

export default {
  cache,
  chain,
  utils,
};

export {
  cache,
  chain,
  utils,
}

if (typeof window !== 'undefined') {
  (window as any).RUM_SDK = {
    cache,
    chain,
    utils,
  };
}
