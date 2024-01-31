# Test cases for getTypes

### **getTypes()**

returns all phone types in an array. The type is added to the result array only once in the order the are found.
If there are no phones or no persons, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

## Test 1: get types for default data

expect to return

```json
["home", "work", "mobile"]
```

## Test 2: some type will be an empty string.

Modified Data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "", "number": "385739234" },
      { "type": "work", "number": "585830384" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "Smith",
    "phones": [{ "type": "work", "number": "998474732" }]
  }
]
```

expect to return

```json
["home", "", "work"]
```

## Test 3. Only home phones.

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "", "number": "385739234" },
      { "type": "home", "number": "585830384" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "Smith",
    "phones": [{ "type": "home", "number": "998474732" }]
  }
]
```

expect to return

```json
["home"]
```

## 4. No phones found

return []

Test data:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": []
  },
  {
    "firstname": "Matt",
    "lastname": "Smith",
    "phones": []
  }
]
```

returns []

## Test 5. No Persons found.

Test data is []
returns []
