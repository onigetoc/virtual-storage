// cd C:\GC\1-node-modules\my-module\node-js-server
// node index.js
let vStorage = require('./index.js');

console.log('vStorage set name1');
var storageSet1 = vStorage.set('name1', [{title:'Title 1', description:'Descriptions 1'}]);
console.log(storageSet1);

console.log('vStorage get name1');
console.log(vStorage.get('name1'));

console.log('vStorage set name2');
vStorage.set('name2', [{title:'Title 1', description:'Descriptions 1'}]);

console.log('vStorage get name2');
var getStorage_name2 = vStorage.get('name2');
console.log(getStorage_name2);

console.log('vStorage remove name1');
vStorage.remove('name1');
console.log(vStorage.get('name1'));
