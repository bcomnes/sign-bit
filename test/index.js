var test = require('tape')
var sign = require('../')

test('get-sign correctly returns +1 or -1 for { x | x ∈ ~ℝ }', function (t) {
  t.plan(5)
  t.equal(sign(-0), -1, 'sign(-0) = -1')
  t.equal(sign(0), 1, 'sign(+0) = 1')
  t.equal(sign(-10), -1, 'sign(-10) = -1')
  t.equal(sign(10), 1, 'sign(+10) = 1')
  t.true(isNaN(sign('three')), 'sign("three") = NaN')
})

test('es6 is still bad and should feel bad', function (t) {
  t.plan(6)
  t.equal(Math.sign(-0), 0, 'Math.sign(-0) = 0')
  t.equal(Math.sign(+0), 0, 'Math.sign(+0) = 0')
  t.equal(Math.sign(-10), -1, 'Math.sign(-10) = -1')
  t.equal(Math.sign(10), 1, 'Math.sign(+10) = 1')
  t.pass('¯\\_(ツ)_/¯')
  t.true(isNaN(Math.sign('three')), 'Math.sign("three") = NaN ')
})
