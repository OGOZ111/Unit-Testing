# Test caes for getAllNumnbers

## **getAllNumbers()**

Returns all phone numbers in an array, each as a person of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

## Tests

### Test 1. Testing with default data.

returns same array that was used to create the register.

### Test 2. some phones misssing

testData:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "385739234" },
      { "type": "work", "number": "585830384" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "Smith",
    "phones": []
  }
]
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "385739234" },
      { "type": "work", "number": "585830384" }
    ]
  }
]
```

### Test 3. some phones misssing 2

testData:

```json
[
  {
    "firstname": "Vera",
    "lastname": "Smith",
    "phones": []
  },
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "385739234" },
      { "type": "work", "number": "585830384" }
    ]
  },
  {
    "firstname": "Matt",
    "lastname": "Smith",
    "phones": []
  },
  {
    "firstname": "Mary",
    "lastname": "Janes",
    "phones": [{ "type": "home", "number": "87654321" }]
  }
]
```

returns:

```json
[
  {
    "firstname": "Leila",
    "lastname": "Hökki",
    "phones": [
      { "type": "home", "number": "12345678" },
      { "type": "work", "number": "385739234" },
      { "type": "work", "number": "585830384" }
    ]
  },
  {
    "firstname": "Mary",
    "lastname": "Janes",
    "phones": [{ "type": "home", "number": "87654321" }]
  }
]
```

### Test 4. All phones are missing.

testData:

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

### Test 5. All persons missing

testData is []
returns []
