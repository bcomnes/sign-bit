# sign-bit

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/sign-bit.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sign-bit
[travis-image]: https://img.shields.io/travis/bcomnes/sign-bit.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/sign-bit
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Correctly returns the sign bit of a IEEE-754 number as 1 or -1, including +/-0.

In IEEE-754, [zeros are signed](https://en.wikipedia.org/wiki/Signed_zero).  In Javascript, numbers follow the IEEE-754 spec.  `Math.sign` tries to behave like the [sign](https://en.wikipedia.org/wiki/Sign_function) function in math, but returns IEEE-754 signed zeros: [tc39.github.io/ecma262/#sec-math.sign](https://tc39.github.io/ecma262/#sec-math.sign).  Signed zeros are tricky do detect and work with in JS.  Arguably, signed zeros and the mathematical definition of the `sign` don't exactly line up and there is room for confusion and ambiguity as to what the Math.sign is supposed to do in this context.

`sign-bit` unambiguously returns the sign bit as `1` or `-1` of all Numbers in JS, including signed zeros.

## Install

```
npm install sign-bit
```

## Usage

```js
var sign = require('sign-bit')

sign(3)   //  1
sign(-3)  // -1
sign(0)   //  1
sign(-0)  // -1

Math.sign(3)   //  1
Math.sign(-3)  // -1
Math.sign(0)   //  0
Math.sign(-0)  //  -0

// ¯\_(ツ)_/¯
```

## Why?

See this thread: https://twitter.com/ydkjs/status/682225267276812288

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## References / Credits

- [Inspired by @YDKJS's tweet](https://twitter.com/ydkjs/status/682225267276812288)
- [and the accompanying fixyFill](https://twitter.com/YDKJS/status/682226598683095040)
- [mathworld.wolfram.com/Sign](http://mathworld.wolfram.com/Sign.html)
- [tc39.github.io/ecma262/#sec-math.sign](https://tc39.github.io/ecma262/#sec-math.sign)
- [en.wikipedia.org/wiki/Signed_zero](https://en.wikipedia.org/wiki/Signed_zero)
- [en.wikipedia.org/wiki/One-sided_limit](https://en.wikipedia.org/wiki/One-sided_limit)
- [en.wikipedia.org/wiki/IEEE_754-1985#Zero](https://en.wikipedia.org/wiki/IEEE_754-1985#Zero)

## License

[ISC](LICENSE)
