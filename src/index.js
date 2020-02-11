/*! virtual-storage v1.0.0-beta.1 | MIT */
module.exports = init();
//'use strict';

  function init() {

    'use strict';
    let json = {};

    function set(key, value, attributes) {

			// IF IS NOT ARRAY MAKE IT A OBJECT
      // https://stackoverflow.com/a/20956445/211324
      if(!Array.isArray(value))
				value = [value];
      // GC
      json[key] = value;
      console.log(json);
      //printLog(JSON.stringify(json))

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
        //printLog("no data found for " + key);
        //return "Unavailable";
        return ;
      }

      console.log(json);
      //printLog(JSON.stringify(json[key]));
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

      //printLog(JSON.stringify(json));
      console.log(json);
      return json;

      //return key ? jar[key] : jar
    }

    return Object.create({
      set: set,
      get: get,
      remove: remove
    });
  }

//export default init();
