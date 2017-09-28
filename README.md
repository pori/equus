# equus

Chainable validation.

## Install

```
$ npm install equus
```

## Examples

```
import equus from 'equus';

const validator = equus();

validator.onPass(value => {});
validator.onFail(value => {});

validator
      .equal(1, 1)
      .greaterThan(3, 1)
      // Run a bunch of other checks... 
```

## License

MIT
