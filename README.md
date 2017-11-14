[circle.ci-master-badge]: https://circleci.com/gh/explore-node-js/node.js-bytes-calculator/tree/master.svg?style=svg
[circle.ci-master-link]: https://circleci.com/gh/explore-node-js/node.js-bytes-calculator/tree/master
[codecov.io-master-badge]: https://codecov.io/gh/explore-node-js/node.js-bytes-calculator/branch/master/graph/badge.svg
[codecov.io-master-link]: https://codecov.io/gh/explore-node-js/node.js-bytes-calculator

# DEPRECATED, consider use [byte-sequence-calculator](https://www.npmjs.com/package/byte-sequence-calculator)

|                  | master
|---               |---
| __tests__        |
| _< Circle CI >_  | [![build][circle.ci-master-badge]][circle.ci-master-link]
| __coverage__     |
| _< codecov.io >_ | [![coverage][codecov.io-master-badge]][codecov.io-master-link]

# node.js-bytes-calculator
abstract and easy way how to work with bytes in JS

## how to install

`$ npm install sequence-calculator` or `yarn add sequence-calculator`

## software requirements

* node.js v6.9+ [with v8 enabled]
* npm v3+

## used technologies

* jest _[for tests only]_

## how to execute tests

`$ npm test` or, to execute tests with coverage `npm test -- --coverage`

## how to use

`import { hasSequence, addSequence, removeSequence } from 'sequence-calculator';` or
`const { hasSequence, addSequence, removeSequence } = require('sequence-calculator');`

## examples

```javascript
hasSequence(255,  0x0f) -> returns true {true}, as 0xFF {255} contains 0xF {15}
hasSequence(0b10, 0o10) -> returns false {false}, as 0x02 {2} do not contains 0x08 {8}

addSequence(0x02, 0x02) -> returns 0x02 {2}, as sequence 0x02 {2} already contains 0x01 {2}
addSequence(0o01, 0b10) -> returns 0x03 {3}, as sequence 0x01 {1} do not contain 0x02 {2}

removeSequence(0x00,  0x01) -> returns 0x00 {0}, as 0x01 {1} is not present in 0x0 {0}
removeSequence(0o06,     2) -> returns 0x04 {4}, as 0x02 {2} been dropped 0x06 {6} sequence
removeSequence(2,    0b110) -> returns 0x00 {0}, as 0x06 {6} sequence contained 0x02 {2}, which been removed from origin 0x02
```
