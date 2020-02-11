// cd C:\GC\1-node-modules\my-module\node-js-server
// node index.js
var vStorage = require('./src');

var data_name2 = vStorage.set('data_name2', [{title:'Title 2', description:'Descriptions 2'}]);
console.log(data_name2);

var get_data_name2 = vStorage.get('data_name3');
console.log(get_data_name2);
