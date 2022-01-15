module.exports = {
  moduleFileExtensions: ['js', 'json', 'jsx', 'vue'],
  transform: {
    '.*\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  moduleNameMapper: {
    'src/(.+)$/': '<rootDir>/src/$1',
    '@/(.*)': '<rootDir>/src/$1',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
  transformIgnorePatterns: ['/node_modules/'],
};
