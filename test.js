var proxyquire = require('proxyquire').noCallThru()
var assert = require('assert')

var main = proxyquire('./', {
  'not-installed': {
    value: 123
  }
})

assert.equal(main.value, 123)
