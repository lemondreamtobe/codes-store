//traditional inherit
//constructor function and prototype

function Sup(name) {
    this.name = name;
    this.age = 17;
    this.favour = ["game", "ball", "Js"];
}; 
Sup.prototype.sayHi = function() {
    console.log("Hi, I am" + this.name);
};
function Sub(name, sex) {
    Sup.call(this, name);
    this.sex = sex;
};
Sub.prototype = new sup();
Sub.prototype.greet = function() {
    alert("hi");
};

//but this way is better
//avoid constructing function twice

function inheritPrototype (subType, supType) {
    var prototype = supType.prototype;
    prototype.constructor = subType;
    subType.prototype = prototype;
};    
function Sup(name) {
    this.name = name;
    this.age = 17;
    this.favour = ["game", "ball", "Js"];
};
Sup.prototype.sayHi = function() {
    console.log("Hi, I am" + this.name);
};
function Sub(name, sex) {
    Sup.call(this, name);
    this.sex = sex;
};
inheritPrototype(Sub, Sup);
Sub.prototype.greet = function() {
    alert("hi");
};   
