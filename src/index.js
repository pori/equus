import assert from './assert'

export function fromValue (value) {

  let valid = false

  let tests   = []
  let passes  = []
  let failures   = []

  function onTest (f) {
    tests.push(f)
  }

  function onPass (f) {
    passes.push(f)
  }

  function onFail (f) {
    failures.push(f)
  }

  function isValid () {
    return valid
  }

  function validate (name) {
    return function (expected) {
      let result = assert[name](value, expected)

      tests.forEach(f => f(expected, result))

      if (assert.is(result)) {
        passes.forEach(f => f(expected))
      }
      else {
        failures.forEach(f => f(expected))
      }

      return result
    }
  }

  let assert_ = {}

  for (name in assert) {
    assert_[name] = validate(value)
  }

  let methods = [
    onTest,
    onPass,
    onFail,
    isValid,
    validate
  ]

  Object.assign(methods, assert_)

  return methods
}
