# virtual-storage
Virtual Storage (node) for those who do not have access to localStorage like Dialogflow

### [Test on Runkit](https://runkit.com/onigetoc/5e43f1d10888310014d63d5d)

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

