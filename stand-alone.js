/*! virtual-storage v1.0.0-beta.1 | MIT */

//'use strict';

let json = {};

(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, (function() {
      var current = global.vStorage;
      var exports = global.vStorage = factory();
      exports.noConflict = function() {
        global.vStorage = current;
        return exports;
      };
    }()));
}(this, function() {
  'use strict';
/*   var rfc6265Converter = {
    read: function(value) {
      return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(value) {
      return encodeURIComponent(value).replace(
        /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
        decodeURIComponent
      )
    }
  }; */

/*   function assign(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        target[key] = source[key];
      }
    }
    return target
  } */

  function init() {

    function set(key, value, attributes) {

			// IF IS NOT ARRAY MAKE IT A OBJECT
      // https://stackoverflow.com/a/20956445/211324
      if(!Array.isArray(value))
				value = [value];
      // GC
      json[key] = value;
      console.log(json)
      printLog(JSON.stringify(json))

      return (json[key] = value);
      //return (document.cookie = key + '=' + value + stringifiedAttributes)
    }

    function get(key) {
      /*   if (typeof document === 'undefined') {
          return
        } */

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      if (!json.hasOwnProperty(key)) {
        console.log("no data found for " + key);
        printLog("no data found for " + key);
        //return "Unavailable";
        return
      }

      console.log(json);
      printLog(JSON.stringify(json[key]));
      //test = JSON.parse(data[0][name]);
      //alert(newName)
      //console.log(data);
      console.log(json[key][0].title);
      return json[key][0];

      //return key ? jar[key] : jar
    }
    function remove(key) {

    	if(!key)
      	json = {};
    	else if (key)
      	delete json[key];

      printLog(JSON.stringify(json));
      console.log(json);
      return json;

      //return key ? jar[key] : jar
    }

    return Object.create({
      set: set,
      get: get,
      remove: remove
    })
  }
  var api = init();
  return api;
}));

/************************* PRINT LOG ********************************/

var css = '.printList:first-child {background-color: #f2f2f2;}',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');
head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet){
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

var printlog = document.createElement('div');
printlog.id= "print.log";
printlog.style.cssText = 'margin: 10px';
document.body.appendChild(printlog);

function printLog(content) {
  var newList = document.createElement('div');
  newList.setAttribute('class', 'printList');
	newList.style.cssText = 'padding: 6px;padding-top: 6px;border-top: dashed 1px #ccc;padding-top: 6px;';
  newList.innerHTML = content;
  //newItem.appendChild(textnode);

  var list = document.getElementById('print.log');
  list.insertBefore(newList, list.childNodes[0]);
  //document.body.appendChild(div);
}

/* function print1(content) {
  var div = document.createElement('div');
  div.setAttribute('class', "content");
  div.innerHTML = content;
  document.body.appendChild(div);
} */



//)} // INIT
//export default init(rfc6265Converter, { path: '/' })
