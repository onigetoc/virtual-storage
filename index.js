/*! virtual-storage 0.1.3-beta.1 | MIT */
'use strict';

/**
 * Virtual storage
 * @param {string} name
 * @param {object} [{title:'Title 1', description:'Descriptions 1'}]
 * @return {string}
 */

module.exports = vStorage();
//'use strict';

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
      //printLog(JSON.stringify(vStorage))

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
        //printLog("no data found for " + key);
        //return "Unavailable";
        return ;
      }

      console.log(vStorage);
      //printLog(JSON.stringify(vStorage[key]));
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

      //printLog(JSON.stringify(vStorage));
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
