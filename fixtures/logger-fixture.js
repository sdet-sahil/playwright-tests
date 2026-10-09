import { test as base, expect } from '@playwright/test';
import { logger as baseLogger} from '../utils/logger.js';


export const test = base.extend({
    logger : async ({}, use, testInfo) => {
        const testLogger = baseLogger.child({
          test: testInfo.title,
          test: testInfo.title,
          worker: testInfo.workerIndex
        });
        await use(testLogger);
    }
});

export { expect };