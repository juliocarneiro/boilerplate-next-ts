import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/hooks/**/*.{js,jsx,ts,tsx}',
    './src/tests/*.{js,jsx,ts,tsx}',
    '!./src/**/*.stories.{js,jsx,ts,tsx}',
    '!./src/**/*.styles.{js,jsx,ts,tsx}'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  transform: {
    '^.+\\.svg$': '<rootDir>/svgTransform.js'
  },
  setupFiles: [`<rootDir>/jest-shim.js`],
  coverageReporters: ['text', 'cobertura', 'lcov'],
  modulePaths: ['<rootDir>/src/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}

export default createJestConfig(customJestConfig)
