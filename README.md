# equus

Curried equality library.

# Setup

```
$ npm i equus
```

# Example

```js
import { is, not, eq, ne, lt, gte, all, any } from 'equus';

// (true === true && {} && !false && 1 < 2 && (false !== false || 3 >= 3))

if (all(eq(true)(true), is({}), not(false), lt(1)(2), any(ne(false)(false), gte(3)(3)))) {
  // Do things.
}
```

# License

MIT
