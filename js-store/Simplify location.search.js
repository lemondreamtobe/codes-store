//that follow codes came from Nicholas

function getQueryStringArgs() {
    
    //get search string and pick up ?
    
    var qs = (window.location.search.length > 0 ? window.location.search.substring(1) : ""), //split "?"
        args = {}, //object for store
        items = qs.length ? qs.split("&") : [], //every item's format is "a=xasfsfs"
        item = null,
        name = null,
        value = null,
        i = 0,
        len = items.length;
        
    for (i = 0; i < len; i++) {
        item = items[i].split("="); //split "="
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        
        if (name.length) {
            args[name] = value;
        };
    };
    return args;
};
