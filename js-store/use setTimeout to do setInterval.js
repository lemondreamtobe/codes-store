var num = 0;
var max = 10;
function increamentNumber() {
    num++;
    
    if (num < max) {
        setTimeout(increamentNumber, 500);
    } else {
        alert("done");
    };
};
setTimeout(increamentNumber, 500);
