import { appConfig } from './appConfig.js';

const config = {
  get(...keys) {
    const path = keys.flatMap(key => key.split('.'));
    let value = appConfig;

    for (const key of path) {
      if (
        value === null ||
        value === undefined ||
        !Object.prototype.hasOwnProperty.call(value, key)
      ) {
        throw new Error(
          `Configuration key not found: ${path.join('.')}`
        );
      }

      value = value[key];
    }

    return value;
  },
};

export default config;