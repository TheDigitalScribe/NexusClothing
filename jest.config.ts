const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'
  ],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  modulePathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{jsx,tsx}',
    '!src/**/*.d.ts',
    '!src/**/types.ts',
  ],
  verbose: true
}

module.exports = createJestConfig(customJestConfig)
