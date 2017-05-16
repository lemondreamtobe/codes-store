//js way
var a = " zhang lin feng ";
console.log(a.replace(/(^\s*)|(\s*$)/g, "")); //trim
console.log(a.replace(/(^\s*)/g, "")); //left trim
console.log(a.replace(/(\s*$)/g, "")); //right trim

//jquery way
console.log($.trim(a));
