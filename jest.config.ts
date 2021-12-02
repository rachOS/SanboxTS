// jest.config.ts
import type { Config } from '@jest/types';
//import { defaults } from 'jest-config';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    //...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'json',
    'jsx',
    'node',
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!./jest.config.ts',
  ],
  coverageThreshold: {
    global: {
      functions: 80,
      branches: 80,
      statements: 20,
    },
  },
  displayName: {
    name: 'CLIENT',
    color: 'blue',
  },
  watchman: true,
};
export default config;

/* module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
}; */
