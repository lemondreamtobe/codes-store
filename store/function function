function factorial(num) {
    if (num <= 1) {
        return num
    } else {
        return num * factorial(num - 1);
    };
};
factorial(10); //3628800
var alternatename = factorial;
factorial = null;
alternatename(10); //TypeError!Bcos i changed name and set null for the original,it is not a function now.

//the way to resolve
//arguments.callee:refer the function i am using

function factorial(num) {
    if (num <= 1) {
        return num
    } else {
        return num * arguments.callee(num - 1);
    };
};
var alternatename = factorial;
factorial = null;
alternatename(10); //3628800.That's OK.

//special
//in 'use strict' model,can't use arguments.callee

'use strict'
function factorial(num) {
    if (num <= 1) {
        return num
    } else {
        return num * arguments.callee(num - 1); //TypeError!'caller', 'callee', and 'arguments' properties may not be accessed on strict mode 
    };
};
var alternatename = factorial;
factorial = null;
alternatename(10);

//can use function expression with name

var factorial = (function f(num) {
     if (num <= 1) {
        return num
    } else {
        return num * f(num - 1);
    };
});
var alternatename = factorial;
factorial = null;
alternatename(10);3628800.That's OK.
//most of codes form the book of Nicolas.the man is very very great.
