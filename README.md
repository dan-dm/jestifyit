# jestifyit [![npm version](https://badge.fury.io/js/jestifyit.svg)](https://badge.fury.io/js/jestifyit) ![NPM](https://img.shields.io/npm/l/jestifyit) ![npm bundle size](https://img.shields.io/bundlephobia/min/jestifyit)


`jestifyit` is a simple way to create a *new* Node project and set it up for Jest testing. 

`jestifyit` initializes the `package.json` file with the following:
- Use **Jest** for testing => include `"node --experimental-vm-modules node_modules/jest/bin/jest.js"` statement
- Use ES6 Modules instead of CJS => include `"type": "module"`
- Use `npm` to install **Jest** => execute `npm install --save-dev jest`

## Usage

##### Install `jestifyit` globally with:
- `npm install -g jestifyit`
##### Run it in a new folder (empty project)
- `jestifyit`

### Disclaimer: This package is **ONLY** tested with a newly initialized project, as the steps above imply. 
Using it in any other situation might give unexpected results ― no guarantees!
