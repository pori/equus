# equus

Functional, declarative comparison framework.

# Dependencies

Node.js version `4.0` or later.

# Installation

```
$ npm install equus
```

# Example

```js
const equus = require('equus');
const is = equus.is;
const not = equus.not;
const eq = equus.eq;
const ne = equus.ne;
const lt = equus.lt;
const gte = equus.gte;
const and = equus.and;
const or = equus.and;

// (true === true && {} && !false && 1 < 2 && (false !== false || 3 >= 3))

if (and(eq(true, true), is({}), not(false), lt(1, 2), or(ne(false, false), gte(3, 3)))) {
  // Do things for great goods.
}
```

# API

Read more on the [documentation page](https://pori.github.io/equus/0.1.0/).

# License

MIT
