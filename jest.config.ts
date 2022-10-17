import nextJest from 'next/jest'

const createJestConfig = nextJest()

const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/tests/*.test.ts(x)?', '!src/**/*.stories.tsx'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}

export default createJestConfig(customJestConfig)
