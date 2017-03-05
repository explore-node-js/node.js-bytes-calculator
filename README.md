# node.js-bytes-calculator
abstract and easy way how to work with bytes in JS

## software requirements
 * node.js v6.9+ [with v8 enabled]
 * npm v3+

## used technologies
 * jest
 
## how to execute tests
 `npm test`
to execute tests with coverage
 `npm test -- --coverage`

## how to use
`import calc from "node-bytes-calculator";` or `const calc = require("node-bytes-calculator");`

```
calc.hasBytes(0xff, 0x0f) -> return true as 0xff contains 0x0f bytes
calc.hasBytes(0x02, 0x08) -> retuns false as 0x02 do not contains 0x08 bytes

calc.addBytes(0x02, 0x02) -> returns 0x02
calc.addBytes(0x01, 0x02) -> returns 0x03

calc.removeBytes(0x00, 0x01) -> returns 0x00 as there where no bytes
calc.removeBytes(0x06, 0x02) -> returns 0x04 as 0x02 bytes been delete removed from 0x06
calc.removeBytes(0x02, 0x06) -> returns 0x00 as 0x06 bytes contained 0x02 bytes, which been removed from origin 0x02
```
