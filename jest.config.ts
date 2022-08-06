// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  collectCoverage: true,
  coverageReporters: ["json", "html", "lcov"],
  testMatch: [
    "**/src/test/**/*.[jt]s?(x)", 
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    }
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  }
};

export default config;