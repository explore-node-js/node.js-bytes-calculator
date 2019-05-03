[circle.ci-master-badge]: https://circleci.com/gh/explore-node-js/node.js-bytes-calculator/tree/master.svg?style=svg
[circle.ci-master]: https://circleci.com/gh/explore-node-js/node.js-bytes-calculator/tree/master
[codecov.io-master-badge]: https://codecov.io/gh/explore-node-js/node.js-bytes-calculator/branch/master/graph/badge.svg
[codecov.io-master]: https://codecov.io/gh/explore-node-js/node.js-bytes-calculator

# sequence-calculator
abstract and easy way how to work with byte sequences in JS

[![build][circle.ci-master-badge]][circle.ci-master] [![coverage][codecov.io-master-badge]][codecov.io-master]

### how to install

`$ npm i sequence-calculator` or `yarn add sequence-calculator`

### software requirements

* [node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)+ or [yarn](https://yarnpkg.com/)

### used technologies

* [jest](https://facebook.github.io/jest/) - for tests

### used services

* [circle ci](https://circleci.com/dashboard)
* [codecov](https://codecov.io/)
* [code climate](https://codeclimate.com/)
* [snyk](https://snyk.io/)

### how to execute tests

`$ npm test` or, to execute tests with coverage `npm test -- --coverage`

### how to use

```javascript
/** ES6 */
import { hasSequence, addSequence, removeSequence } from 'sequence-calculator';
/** commmonjs */
const { hasSequence, addSequence, removeSequence } = require('sequence-calculator');

/** examples */
hasSequence(255,  0x0f) -> returns true {true}, as 0xFF {255} contains 0xF {15}
hasSequence(0b10, 0o10) -> returns false {false}, as 0x02 {2} do not contains 0x08 {8}

addSequence(0x02, 0x02) -> returns 0x02 {2}, as sequence 0x02 {2} already contains 0x01 {2}
addSequence(0o01, 0b10) -> returns 0x03 {3}, as sequence 0x01 {1} do not contain 0x02 {2}

removeSequence(0x00,  0x01) -> returns 0x00 {0}, as 0x01 {1} is not present in 0x0 {0}
removeSequence(0o06,     2) -> returns 0x04 {4}, as 0x02 {2} been dropped 0x06 {6} sequence
removeSequence(2,    0b110) -> returns 0x00 {0}, as 0x06 {6} sequence contained 0x02 {2},
                                                 which been removed from origin 0x02
```
