# 2.0.0 - 13.11.2017

functions can be used for function programming for easealy, as they are shipped independently
instead of using

* ES6: `import calc from "node-bytes-calculator";` or
* commonjs: `const calc = require("node-bytes-calculator")`

now

* ES6: `import { hasSequence, addSequence, removeSequence } from 'sequence-calculator';` or
* commonjs: `const { hasSequence, addSequence, removeSequence } = require('sequence-calculator');`

functions renamed

* instead of `calc.hasBytes(x, y)` just `hasSequence(x, y)`
* instead of `calc.addBytes(x, y)` just `addSequence(x, y)`
* instead of `calc.removeBytes(x, y)` just `removeSequence(x, y)`

functions are shipped as __arrow functions__ e.g. {this} is not redifined in those [as there is no need for that]