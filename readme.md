# noopaam

Noop as a module.

File size: **330 bytes**.<br/>
Supported platforms: **server and browser (does nothing on the server)**.<br/>
Supported language versions: **ES3 and above**.

If you use this library in your software please tweet me @benastontweet.

## Installation

```npm install noopaam```

## Example

```javascript
var noop = require('noopaam');

var v = {
	myNoop1: noop,
	myNoop2: noop.truthy,
	myNoop3: noop.falsy,
	myNoop4: noop.exception('oops')
};

v.myNoop1(); // undefined
v.myNoop2(); // true
v.myNoop3(); // false
v.myNoop4(); // myNoop4 threw 'oops'

```

## License & Copyright

This software is released under the MIT License. It is Copyright 2015, Ben Aston. I may be contacted at ben@bj.ma.

## How to Contribute

Pull requests including bug fixes, new features and improved test coverage are welcomed. Please do your best, where possible, to follow the style of code found in the existing codebase.