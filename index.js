/*! virtual-storage 0.1.8-beta.1 | MIT */
'use strict';

/**
 * Virtual storage
 * @param {string} name
 * @param {object} [{title:'Title 1', description:'Descriptions 1'}]
 * @return {string}
 */

module.exports = vStorage();

function vStorage() {
  let vStorage = [];

  function set(key, value) {
    vStorage[key] = value;
    return (vStorage[key]);
  }
  function get(key) {
    if (!vStorage.hasOwnProperty(key)) {
      console.log("no data found for " + key);
      return vStorage ;
    }
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
