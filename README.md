<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNumberArray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is an array-like object of numbers.



<section class="usage">

## Usage

```javascript
import isNumberArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@deno/mod.js';
```

#### isNumberArray( value )

Tests if a `value` is an array-like object of `numbers`.

```javascript
var bool = isNumberArray( [ 1, 2, 3, 4 ] );
// returns true
```

#### isNumberArray.primitives( value )

Tests if a `value` is an array-like object containing **only** `number` primitives.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isNumberArray.primitives( [ 1, 2, 3 ] );
// returns true

bool = isNumberArray.primitives( [ 1, new Number( 2 ), 3 ] );
// returns false
```

#### isNumberArray.objects( value )

Tests if a `value` is an array-like object containing **only** `Number` objects.

<!-- eslint-disable no-new-wrappers -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';

var bool = isNumberArray.objects( [ new Number( 1 ), new Number( 2 ) ] );
// returns true

bool = isNumberArray.objects( [ new Number( 1 ), 2 ] );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-new-wrappers -->

<!-- eslint no-undef: "error" -->

```javascript
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@deno/mod.js';
import isNumberArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number-array@deno/mod.js';

var bool = isNumberArray( [ 3.14 ] );
// returns true

bool = isNumberArray( [ NaN ] );
// returns true

bool = isNumberArray( [ 1, 2, 3 ] );
// returns true

bool = isNumberArray( [ new Number( 3.14 ), 2, 3 ] );
// returns true

bool = isNumberArray( 3.14 );
// returns false

bool = isNumberArray( [] );
// returns false

bool = isNumberArray( [ '1', 2 ] );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert/is-array`][@stdlib/assert/is-array]</span><span class="delimiter">: </span><span class="description">test if a value is an array.</span>
-   <span class="package-name">[`@stdlib/assert/is-number`][@stdlib/assert/is-number]</span><span class="delimiter">: </span><span class="description">test if a value is a number.</span>
-   <span class="package-name">[`@stdlib/assert/is-numeric-array`][@stdlib/assert/is-numeric-array]</span><span class="delimiter">: </span><span class="description">test if a value is a numeric array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-number-array.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-number-array

[test-image]: https://github.com/stdlib-js/assert-is-number-array/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-number-array/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-number-array/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-number-array?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-number-array.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-number-array/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-number-array/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-number-array/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-number-array/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-number-array/main/LICENSE

<!-- <related-links> -->

[@stdlib/assert/is-array]: https://github.com/stdlib-js/assert-is-array/tree/deno

[@stdlib/assert/is-number]: https://github.com/stdlib-js/assert-is-number/tree/deno

[@stdlib/assert/is-numeric-array]: https://github.com/stdlib-js/assert-is-numeric-array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
