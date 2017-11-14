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
`npm install node-bytes-calculator` or `yarn add node-bytes-calculator`

## software requirements
 * node.js v6.9+ [with v8 enabled]
 * npm v3+

## used technologies
 * jest _[for tests only]_
 
## how to execute tests
 `npm test` or, to execute tests with coverage `npm test -- --coverage`

## how to use
`import calc from "node-bytes-calculator";` or `const calc = require("node-bytes-calculator");`

```
calc.hasBytes(0xff, 0x0f) -> return true as 0xff contains 0x0f bytes
calc.hasBytes(0x02, 0x08) -> retuns false as 0x02 do not contains 0x08 bytes

calc.addBytes(0x02, 0x02) -> returns 0x02
calc.addBytes(0x01, 0x02) -> returns 0x03

calc.removeBytes(0x00, 0x01) -> returns 0x00 as there where no bytes
calc.removeBytes(0x06, 0x02) -> returns 0x04 as 0x02 bytes been delete removed from 0x06
calc.removeBytes(0x02, 0x06) -> returns 0x00 as 0x06 bytes contained 0x02 bytes,
                                                which been removed from origin 0x02
```
