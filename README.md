# virtual-storage
Virtual Storage (node) for those who do not have access to localStorage like Dialogflow

## Insert in project

```javascript
vStorage = require('virtual-storage');
```

## Basic Usage

Create a virtual storage:

```javascript
vStorage.set('name', 'value')
```

Read virtual storage:

```javascript
vStorage.get('name') // => 'value'
vStorage.get('nothing') // => undefined
```

Delete virtual storage:

```javascript
vStorage.remove('name')
```

Delete virtual storage by name:

```javascript
vStorage.remove('name')
```

Delete all virtual storage:

```javascript
vStorage.remove()
```

When deleting a virtual storage it will generate a empty array {}

#### Simple set / get example:

```javascript
let json = [{title:'Title 1', description:'Descriptions 1'},{title:'Title 2', description:'Descriptions 2'}];
vStorage.set('json_infos', json);
```
Get json infos
```javascript
let json_info = vStorage.get('json_infos');

let tile_1 = json_info[0].title; // Title 1
let description_2 = json_info[1].description // Descriptions 2
```

## For Dialogflow

#### You may need a uniq name / key for your app. like Dialogflow.


Create a uniq name for Dialogflow:

You can create a uniq id at the top of your app.js file like this.

```javascript
const sessionID = new Date().getTime(); // or any code you may find on the web
```

```javascript
vStorage.set('name'+sessionID, store_json_response);
```
Get stored values
```javascript
vStorage.get('name'+sessionID);
```

#### Or with Dialogflow session id.

```javascript
let sessionID = vStorage.set('json_list'+SessionID(conv.body.session);
```

```javascript
vStorage.set('uniq_name'+sessionID, store_json_response);
```

Get stored values
```javascript
let getmyjsonStorage = vStorage.get('uniq_name'+sessionID);
```

```javascript
// Get only the id part from Dialogflow conv response
function SessionID(sID) {
  var n = sID.lastIndexOf('/');
  return sID.substring(n + 1);
}
```

[Test on Runkit](https://runkit.com/onigetoc/5e43f1d10888310014d63d5d)

[Js fiddle Example](https://jsfiddle.net/onigetoc/jzbuve15/)
