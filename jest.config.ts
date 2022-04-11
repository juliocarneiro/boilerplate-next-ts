import nextJest from 'next/jest'

const createJestConfig = nextJest()

const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc/jest']
  }
}

export default createJestConfig(customJestConfig)
