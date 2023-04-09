module.exports = {

  "testEnvironment": "jsdom",
    "transform": {
      '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",

    },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '/Users/mowems/Entaze/CognitiveApp/CognitiveApp/__mocks__/fileMock.js',
    '\\.(scss|less)$': 'identity-obj-proxy',
  },
  // preset: 'ts-jest',
  // transform: {
  //   '^.+\\.(ts|tsx)?$': 'ts-jest',
  //   "^.+\\.(js|jsx)$": "babel-jest",
  // }
  // verbose: true,
  // setupFilesAfterEnv: ["/Users/mowems/Entaze/CognitiveApp/CognitiveApp/client/src/setupTests.ts"],
  // moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  // moduleDirectories: ["node_modules", "src"],
  // moduleNameMapper: {
  //   "\\.(css|less|scss)$": "identity-obj-proxy"
  // },
  // transform: {
  //   '^.+\\.(ts|tsx)?$': 'ts-jest',
  //   "^.+\\.(js|jsx)$": "babel-jest",
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "/Users/mowems/Entaze/CognitiveApp/CognitiveApp/__mocks__/fileMock.js",
  // }
};


  // "verbose": true,
  // "setupFilesAfterEnv": ["/Users/mowems/Entaze/CognitiveApp/CognitiveApp/client/src/setupTests.ts"],
  // "moduleFileExtensions": ["js", "jsx", "ts", "tsx"],
  // "moduleDirectories": ["node_modules", "src"],
  // "moduleNameMapper": {
  //   "\\.(css|less|scss)$": "identity-obj-proxy"
  // },
  // "transform": {
  //   "^.+\\.(ts|tsx)?$": "ts-jest",
  //   "^.+\\.(js|jsx)$": "babel-jest",
  //   "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "/Users/mowems/Entaze/CognitiveApp/CognitiveApp/__mocks__/fileMock.js"
  // }
