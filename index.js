module.exports = function sign (x) {
  if (Object.is(x, -0)) return -1
  if (x === 0) return 1
  return Math.sign(x)
}
