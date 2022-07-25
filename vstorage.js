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
        //return "Unavailable";
        return ;
      }

      console.log(vStorage);
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
