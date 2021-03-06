// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_D20_T3;
* @section: 13.2.2;
* @assertion: function declaration inside of "with" statement is a fuction declaration inside of current execution context;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (typeof __func !== "function") {
	$ERROR('#0: function\'s scope chain is from when it was declared');
}
//
//////////////////////////////////////////////////////////////////////////////

var a = 1;

var __obj = {a:2};

result = __func();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (result !== 1) {
	$ERROR('#1: function declaration inside of "with" statement is a fuction declaration inside of current execution context');
}
//
//////////////////////////////////////////////////////////////////////////////

try {
	with (__obj)
    {
        throw 3;
        function __func(){return a;};
    }
} catch (e) {
	;
}
