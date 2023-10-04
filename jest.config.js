module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)',
    '!src/**/*.stories.ts(x)',
    '!src/storybook/**',
    '!src/app/**',
    '!src/lib/**',
    '!src/types/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
}
