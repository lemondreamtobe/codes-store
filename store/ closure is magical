//Nicholas and his book <Professional JS for Web Developers 3rd Edition> helps me a lot.
//the follow codes are from the book.

function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] = function() {
            return i;
        };
    }
    return result;
};

//createFunctions just creates function 10 times and stores it in result.
//take a look

var a = createFunctions();
a=[function,function,..........];
//a[1],a[2]...is a function but has a closure.
//every item has [[Scopes]].the first item in [[Scopes]] is Closure and i is 10.


//and he give a way to resolve

function createFunctions() {
    var result = new Array();
    for (var i = 0; i < 10; i++) {
        result[i] =function(num) {
			return function(){
				return num;
            }
        }(i);
    }
    return result;
};
var a = createFunctions();
a=[function,function,..........];
//a[1],a[2]...is a function but has a closure.
//every item has [[Scopes]].the first item in [[Scopes]] is Closure and i is 1.the second is 2.

summary:Closure is a reference of activity object not a exact variable.the first block of codes.
every closure refer the same activity object which just has one variable of i.
the second block codes create 10 activity object where copy i 10 times.Just like taking photoes for i.
