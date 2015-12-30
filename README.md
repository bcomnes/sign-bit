# get-sign

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/get-sign.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/get-sign
[travis-image]: https://img.shields.io/travis/bcomnes/get-sign.svg?style=flat-square
[travis-url]: https://travis-ci.org/bcomnes/get-sign
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Correctly returns the sign of a IEEE-754 number as 1 or -1, including +/-0.

In IEEE-754, [zeros are supposed to be signed](https://en.wikipedia.org/wiki/Signed_zero).  In Javascript, numbers are supposed to follow the IEEE-754 spec.  `Math.sign` currently does not implement this behavior correctly: [tc39.github.io/ecma262/#sec-math.sign](https://tc39.github.io/ecma262/#sec-math.sign)

## Install

```
npm install get-sign
```

## Usage

```js
var sign = require('get-sign')

sign(3)   //  1
sign(-3)  // -1
sign(0)   //  1
sign(-0)  // -1

Math.sign(3)   //  1
Math.sign(-3)  // -1
Math.sign(0)   //  0
Math.sign(-0)  //  0

// ¯\_(ツ)_/¯
```

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## References / Credits

- [Inspired by @YDKJS's tweet](https://twitter.com/ydkjs/status/682225267276812288)
- [and the acompanying fixyFill](https://twitter.com/YDKJS/status/682226598683095040)

## License

[ISC](LICENSE)
