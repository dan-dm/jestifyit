# jestifyit [![npm version](https://badge.fury.io/js/jestifyit.svg)](https://badge.fury.io/js/jestifyit) ![NPM](https://img.shields.io/npm/l/jestifyit) ![npm bundle size](https://img.shields.io/bundlephobia/min/jestifyit)


`jestifyit` is a simple way to modify a *new* Node project's `package.json`file to do the following:
1. Use it for testing => include `"node --experimental-vm-modules node_modules/jest/bin/jest.js"` statement
2. Setup the project to use ES6 Modules instead of CJS => include `"type": "module"`
3. Use `npm` to install **Jest** => execute `npm install --save-dev jest`

## Usage

1. `npm init` in a new, empty project directory
2. `npm install jestifyit`
3. `cd node_modules/jestifyit`
4. `node jestifyit.js`

### Disclaimer: This package is **ONLY** tested with a newly initialized project, as the steps above imply. 
Using it in any other situation might give unexpected results ― no guarantees!
