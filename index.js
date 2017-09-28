const assert = require('./assert');

function validate(name) {
  return function(value, expected) {
    const result = assert[name](value, expected);

    tests.forEach(f => f(expected));

    if (result) {
      passes.forEach(f => f(expected));
    }
    else {
      failures.forEach(f => f(expected));
    }

    return this;
  }
}

function equus() {
  this.tests = [];
  this.passes = [];
  this.failures = [];

  const onTest = (f) => this.tests.push(f);

  const onPass = (f) => this.passes.push(f);

  const onFail = (f) => this.failures.push(f);

  const methods = {
    onTest,
    onPass,
    onFail,
    validate
  }

  const assertMethods = {}

  for (name in assert) {
    assertMethods[name] = validate(name);
  }

  return Object.assign({}, methods, assertMethods);
}

module.exports = equus;
