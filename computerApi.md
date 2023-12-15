<!-- here the file name 'computers.json' is used instead of 'Kivimäki_Atte_computers.json' -->

# Computer data storage

## computers.json

The id is unique.

```json
[
  {
    "id": 1,
    "name": "MaxEffect 2000",
    "type": "gameover",
    "amount": 30,
    "price": 499
  },
  {
    "id": 3,
    "name": "BigFlop Mark II",
    "type": "supercomputer",
    "amount": 20,
    "price": 100
  },
  {
    "id": 4,
    "name": "Beast II",
    "type": "server",
    "amount": 5,
    "price": 2000
  }
]
```

## JsonStorageEngine

Storage engine is general solution for json storage.

### public API (methods of Datastorage class)

#### dataStorageLayer.js

- getAll()

  - returns an array of all computers / []

- get(value, key)

  - returns a computer objects in an array / []

- insert(newItem)

  - returns INSERT_OK / NOT_INSERTED / ALREADY_IN_USE

- remove(value)

  - returns REMOVE_OK / NOT_FOUND / NOT_REMOVED

- getter CODES

  - returns an array of status codes

- getter TYPES

  - returns the types of status codes

- getter PRIMARY_KEY

  - unique key for object

- getter KEYS
  - return an array of keys (field names) in the objects / []
  - searches keys from all objects
  - key is added to the array only once
  - for example key of computers computers.json are
    - ["id","name","type","amount","price"]

#### Format of the returned json data

All GET methods return on array of objects on an empty array.
No status messages returned

##### Example

```js
get("gameover", "type");
```

returns

```json
[
  {
    "id": 1,
    "name": "MaxEffect 2000",
    "type": "gameover",
    "amount": 30,
    "price": 499
  }
]
```

and

```js
get(1, "id");
```

returns

```json
[
  {
    "id": 1,
    "name": "MaxEffect 2000",
    "type": "gameover",
    "amount": 30,
    "price": 499
  }
]
```

All post methods return a ststus object.

#### Status codes and messages

```js
const CODES={
    PROGRAM_ERROR:0,
    NOT_FOUND:1,
    INSERT_OK:2
    ...
}
```

```js
const TYPES = {
  ERROR: "error",
  INFO: "info",
};
```

The format of an status message is:

```js
const MESSAGES = {
  PROGRAM_ERROR: () => ({
    message: "Sorry! Error in the program",
    code: CODES.PROGRAM_ERROR,
    type: TYPES.ERROR,
  }),
  NOT_FOUND: (key, value) => ({
    message: `No resource found with ${key} ${value}`,
    code: CODES.NOT_FOUND,
    type: TYPES.INFO,
  }),
  INSERT_OK: (key, value) => ({
    message: `Resource with ${key} ${value} was inserted`,
    code: CODES.INSERT_OK,
    type: TYPES.INFO,
  }),
};
```

status types are `ERROR` or `INFO`

#### Example

```js
remove(10);
```

returns

```js
{
  message: 'No resource found with id 10',
  code: 1,
  type: 'info'
}
```

### private API.

#### readerWriter.js

- readStorage()
  - returns an array of computers / []
- writeStorage(data)
  - returns true / false

#### storageLayer.js

- getAllFromStorage()
  - returns an array of computers / []
- getFromStorage(value,key)
  - default key will be primary_key
  - returns an object matching the criterion / []
- addToStorage(newComputer)
  - returns true/false
- removeFromStorage(id)
  - returns true / false
- getKeys()
  - returns all keys (once) in an array / []
- primary_key
  - return the primary_key from storageConfig

## Storage folder

This folder contains the files that are specific to the actual storage

#### storageConfig.json

```json
{
  "storageFile": "computers.json",
  "adapterFile": "computerAdapter.js",
  "primary_key": "id"
}
```

#### adapter file

Adapter casts numbers from string to number.

#### Example

```js
function adapt(item) {
  return {
    id: +item.id, // also id:Number(item.id)
    name: item.name,
    type: item.type,
    amount: item.amount,
    price: +item.price,
  };
}
```

or using Object.assign

```js
function adapt(item) {
  return Object.assign(item, {
    id: +item.id,
    amount: +item.amount,
    price: +item.price,
  });
}
```

or with "deep copy" especially if your object has multiple levels

```js
function adapt(item) {
  const tempItem = JSON.parse(JSON.stringify(item));
  tempItem.id = +tempItem.id;
  tempItem.amount = +tempItem.amount;
  tempItem.price = +tempItem.price;
  return tempItem;
}
```

## Server config

### config.json

```json
{
  "port": 3000,
  "host": "localhost",
  "storageEngine": {
    "folder": "jsonStorageEngine",
    "dataStorageFile": "dataStorageLayer.js"
  },
  "storage": {
    "folder": "computerRegister",
    "storageConfigFile": "storageConfig.json"
  }
}
```
