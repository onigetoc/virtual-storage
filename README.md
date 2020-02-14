# virtual-storage
Virtual Storage (node) for those who do not have access to localStorage like Dialogflow

[Test on Runkit](https://runkit.com/onigetoc/5e43f1d10888310014d63d5d)

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

_IMPORTANT! When deleting a virtual storage it will generate a empty array {}

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

[Js fiddle Example](https://jsfiddle.net/onigetoc/jzbuve15/)



