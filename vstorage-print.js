/*! virtual-storage v1.0.0-beta.1 | MIT */

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

  function vStorage() {

    // 'use strict';
    let vStorage = {};

    function set(key, value) {

			// IF IS NOT A OBJECT MAKE IT A OBJECT
      // https://stackoverflow.com/a/20956445/211324
      if(!Array.isArray(value))
				value = [value];
      // GC
      vStorage[key] = value;
      console.log(vStorage);
      printLog(JSON.stringify(vStorage))

      return (vStorage[key] = value);
      //return (document.cookie = key + '=' + value + stringifiedAttributes)
    }

    function get(key) {
      /*   if (typeof document === 'undefined') {
          return
        } */

      // To prevent the for loop in the first place assign an empty array
      // in case there are no cookies at all.
      if (!vStorage.hasOwnProperty(key)) {
        console.log("no data found for " + key);
        printLog("no data found for " + key);
        //return "Unavailable";
        return ;
      }

      console.log(vStorage);
      printLog(JSON.stringify(vStorage[key]));
      //test = JSON.parse(data[0][name]);
      //alert(newName)
      //console.log(data);
      console.log(vStorage[key][0].title);
      return vStorage[key][0];

      //return key ? jar[key] : jar
    }
    function remove(key) {

    	if(!key)
      	vStorage = {};
    	else if (key)
      	delete vStorage[key];

      printLog(JSON.stringify(vStorage));
      console.log(vStorage);
      return vStorage;

      //return key ? jar[key] : jar
    }

    return Object.create({
      set: set,
      get: get,
      remove: remove
    });
  }
  var api = vStorage();
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
