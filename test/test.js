// cd C:\GC\1-node-modules\my-module\virtual-storage
// node app.js
let vStorage = require('./../index.js');

console.log('vStorage set name1');
let name1 = vStorage.set('name1', [{title:'Title 1', description:'Descriptions 1'}]);
console.log(name1);

console.log('vStorage get name1');
console.log(vStorage.get('name1'));

console.log('vStorage set name2');
let name2 = vStorage.set('name2', [{title:'Title 2', description:'Descriptions 2'}]);
console.log(name2);

console.log('vStorage get name2');
let getStorage_name2 = vStorage.get('name2');
console.log(getStorage_name2);
console.log(getStorage_name2.title);
console.log(getStorage_name2.description);
//console.log(getStorage_name2);

console.log('vStorage remove name1');
let name1remove = vStorage.remove('name1');
console.log(name1remove);
console.log(vStorage.get('name1'));
