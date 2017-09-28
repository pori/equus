const equus = require('.');

const validator = equus();

validator.onPass(value => console.log('weeee'));
validator.onFail(value => console.log('boooo'));

validator
      .equal(1, 1)
      .greaterThan(3, 1);
