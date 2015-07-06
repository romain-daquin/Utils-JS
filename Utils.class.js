/**Utils Class 
* @author romain.daquin
* @version 1.0
*/
function Utils() { }
Utils.prototype = {
    setCookie: function(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value;
    },
    getCookie: function(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1) {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1) {
            c_value = null;
        } else {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start, c_end));
        }
        return c_value;
    },
    /* Format test */
    isNumber: function(str){
        if(str.match(/^[0-9]+$/i) !== null) return true;
        return false;
    },
    isString: function(str){
        if(str.match(/^[a-zA-ZàáâãäåæÀÁÃÂÄÅÆçÇéèêëÉÊÈËîïíÎÏÍñÑóôòöðœÓÔÕÖÒŒúùûÚÛÙÜýÿÝŸþÞ\-\s\']+$/i) !== null) return true;
        return false;
    },
    isEmail: function(str){
        if(str.match(/^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i) !== null) return true;
        return false;
    },
    isDate: function(str,format){
        if(format == 'euro'){ // french DD/MM/YYYY
            if(str.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/) !== null) return true;
        }else{ // US : YYYY/MM/DD
        if(str.match(/^[0-9]{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])/) !== null) return true;
        }
        return false;
    },
    isUrl: function(str){
        if(str.match(/\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/i) !== null) return true;
        return false;
    },
    isAlphanumeric: function(str,wordcase){
        var regex = /^[a-zA-Z0-9']+$/i;
        if(wordcase == 'lowercase') regex = /^[a-z0-9']+$/i;
        else if(wordcase == 'uppercase') regex = /^[A-Z0-9']+$/i;

        if(str.match(regex) !== null) return true;
        return false;
    },
    convertRgbToHex: function(rgb){
        rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        return "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
    },
    getUrlVars: function(){
        var vars = [], hash;
        if(location.href.indexOf('?') == -1) return {};
        var hashes = location.href.slice(location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
};
