module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
    '^@components(.*)$': '<rootDir>/components$1',
    '^@pages(.*)$': '<rootDir>/pages$1',
    '^@services(.*)$': '<rootDir>/services$1',
  },
  testMatch: ['**/*.test.js'],
  restoreMocks: true,
  verbose: true,
};
