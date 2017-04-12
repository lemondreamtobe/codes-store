//looking for some professional Web engineers giving me advice
//Object Literal

var a = {
	name: "linfeng",
	age: 22
};
//Object Constructor

var b = new Object();
b.name = "zhanglin";
b.age = 22;

//here we can know

a instanceof Object //true
b insatnceof Object //true

//here something go wrong

a.prototype instanceOf Object //false
b.prototype instanceOf Object //false

//maybe u will doubt:if a.prototype isn't an Object?

//here we go
//JS's prototype only exists in function.such as:Array Date Object and so on
//so "a.prototype",this prototype just  is a's attribute,but not real prototype

Object.prototype.color = "red" //true
a.prototype.color = "blue" //wrong! appear TypeError!

//because u can't set attribute to attribute.Now,u can know why "a.prototype instanceOf Object" is false
//this type of "Object" has not constructor function,so they has not prototype except we set it for them.

//instanceof is magical
L instanceof R
progress:L = L.__proto__ ; // invisibility prototype object
	 R = R.prototype ; //obvious prototype object
	 if (L === R) ;return true
	 if not equal ,it will explore other "__proto__" in L
	 if (L.__proto__ === R) ;return true
	 if not,go on until L has not __proto__,the result is false
special point:
	every object type are the type of Object.
	it means u could use instanceof seeing their type;
	such as:
		var a = {};
		a instanceof Object; //true
		function b();
		var ob = new b();
		b instanceof b; //true
		b instanceof Object; //true
		//do u considering prototype object?
		
		b.prototype instanceof Object; //true
		Array.prototype instanceof Object; //true
		//most important
		
		Object.prototype instanceof Object; //false
		because Object.prototype = null;
		
