/*! virtual-storage 0.1.8-beta.1 | MIT */
'use strict';

/**
 * Virtual storage
 * @param {string} name
 * @param {object} [{title:'Title 1', description:'Descriptions 1'}]
 * @return {string}
 */

module.exports = vStorage();

// const sessionID = new Date().getTime();
// const sessionID = '_' + Math.random().toString(36).substr(2, 9);

// const sessionID = function () {
//   // Math.random should be unique because of its seeding algorithm.
//   // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//   // after the decimal.
//   return '_' + Math.random().toString(36).substr(2, 9);
// };

function vStorage() {
  let vStorage = [];

  function set(key, value) {
    // Array.isArray(value)||(value=[value]);
    vStorage[key] = value;
    return (vStorage[key]);
    // return (vStorage[key] = value);
  }
  function get(key) {
    if (!vStorage.hasOwnProperty(key)) {
      console.log("no data found for " + key);
      return vStorage ;
    }
    // return vStorage[key][0];
    return vStorage[key];
  }
  function remove(key) {
    key ? delete vStorage[key] : vStorage = [] ;
    return vStorage;
  }
  return Object.create({
    set: set,
    get: get,
    remove: remove
  });
}
