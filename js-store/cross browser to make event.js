//codes come from Nicholas

var EventUtil = {
    addHandler: function(element, type, handler) {
        
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler) {
    
        if (element.removeEventListener) {
            element.removeEvenListener(type, handler, false);
        } else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(event) {
        return event ? event : window.event;
    },
    getTarget: function(event) {
        return event.target || event.srcElement;
    },
    preventDefault: function(event) {
    
        if (event.preventDefault) {
            event.preventDefault();
        } else  {
            event.returnValue = false;
        }
    },
    stopPro: function(event) {
    
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getRelatedTarget: function(event) {
        
        if (event.relatedTarget) {
            return event.relatedTarget;
        } else if (event.toElement) {
            return event.toElement;
        } else if (event.fromElement) {
            return event.fromElement;
        } else {
            return null
        }
    },
    getButton: function(event) {
        
        if (document.implementation.hasFeature("MouseEvents", "2.0")) {
            return event.button;
        } else {
            switch (event.button) {
                case0 :
                case1 :
                case3 :
                case5 :
                case7 :
                    return 0;
                case2 :
                case6 :
                    return 2;
                case4 :
                    return 1;
             }
       }
   },
   getCharCode: function(event) {
        
        if (typeof event.charCode == "number") {
            return event.charCode;
        } else {
            return event.keyCode;
        }
    }
}
