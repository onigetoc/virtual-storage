# virtual-storage
Virtual Storage (node) for those who do not have access to localStorage like Dialogflow

NOT READY YET
```javascript
vStorage = require('virtual-storage');
```

## Basic Usage

Create a virtual storage:

```javascript
vStorage.set('name', 'value')
```

Read storage:

```javascript
vStorage.get('name') // => 'value'
vStorage.get('nothing') // => undefined
```

_Note: It is not possible to read a particular cookie by passing one of the cookie attributes (which may or may not
have been used when writing the cookie in question):_

```javascript
vStorage.get('foo', { domain: 'sub.example.com' }) // `domain` won't have any effect...!
```

The cookie with the name `foo` will only be available on `.get()` if it's visible from where the
code is called; the domain and/or path attribute will not have an effect when reading.

Delete cookie:

```javascript
vStorage.remove('name')
```

Delete a virtual storage by name:

```javascript
Cookies.remove('name')
```

Delete a all virtual storage:

```javascript
Cookies.remove()
```

_IMPORTANT! When deleting a virtual storage it will generate a empty array {}

