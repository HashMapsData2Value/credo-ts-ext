import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testTimeout: 120000,
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/build/', '/node_modules/', '/__tests__/', 'tests'],
  coverageDirectory: '<rootDir>/coverage/',
  verbose: true,
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        isolatedModules: true,
      },
    ],
  },
  moduleNameMapper: {
    '^@credo-ts/cheqd$': '<rootDir>/../../tests/mocks/cheqd.mock.ts',
  },
}

export default config
