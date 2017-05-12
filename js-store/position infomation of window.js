//Cross browser to sure position of window

var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;

//size of browser
//in Chorme

window.outerWidth; //1440.width of browser.
window.innerWidth; //1099.reduce the width of border.
window.outerHeight; //860.height of browser.
window.innnerHeight; //794.reduce the height of border.

//in IE.only use DOM

document.documentElement.clientHeight; //714
document.documentElement.clientWidth; //1379

//cross browser to get view size  of window(no size of window)

var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

if (typeof pageWidth != "number") {
    if (document.compatMode == "CSS1Compat") { //check "Standard model"
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientWidth;
    } else {
         pageWidth = document.body.innerWidth;
         pageHeight = document.body.innerHeight;
     }
}
