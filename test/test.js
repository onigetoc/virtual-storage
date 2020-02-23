let vStorage = require('./../index.js');

console.log('vStorage set name1');
let name1 = vStorage.set('name1', [{title: 'Title 1', description: 'Descriptions 1'}]);
console.log(name1);

console.log('vStorage get name1');
console.log(vStorage.get('name1'));

console.log('vStorage set name2');

var data = [{
    "id": "1",
    "msg": "hi",
    "tid": "2013-05-05 23:35",
    "fromWho": "hello1@email.se"
  },
  {
    "id": "2",
    "msg": "there",
    "tid": "2013-05-05 23:45",
    "fromWho": "hello2@email.se"
  }
];

let name2 = vStorage.set('name2', data);
console.log(name2);
console.log('My message 2 is: '+name2[1].msg);
console.log('My tid Date 2 is: '+name2[1].tid);

console.log('vStorage get name2');
let getStorage_name2 = vStorage.get('name2');
console.log(getStorage_name2);
console.log(getStorage_name2[1].msg);
console.log(getStorage_name2[1].fromWho);
//console.log(getStorage_name2);

// console.log('Show all');
// let getALL = vStorage.get();
// console.log(getALL);

console.log('vStorage remove name1');
let name1remove = vStorage.remove('name1');
console.log(name1remove);
console.log(vStorage.get('name1'));
console.log(vStorage.get('name1').title);

let name3 = vStorage.set('name3', 'name3 not json');
console.log(vStorage.get('name3'));
