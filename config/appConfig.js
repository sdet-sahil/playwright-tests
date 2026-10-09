
import { commonConfig } from './common.js';

import { environmentConfig as qaConfig } from './environments/qa.js';
import { environmentConfig as stagingConfig } from './environments/staging.js';
import { environmentConfig as prodConfig } from './environments/prod.js';

const env = process.env.TEST_ENV || 'prod';

const environments = {
  qa: qaConfig,
  staging: stagingConfig,
  prod: prodConfig,
};

if (!environments[env]) {
  throw new Error(`Unsupported environment: ${env}`);
}

export const appConfig = {
  ...commonConfig,
  ...environments[env],
};