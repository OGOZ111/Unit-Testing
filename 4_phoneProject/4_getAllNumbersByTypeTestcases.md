# Test cases for get All numbers by type

### **getAllNumbersByType(type)**

Returns an array of object consisting of names and numbers of given type. If no numbers of given type is found, an empty array [] is returned.

If a person has multiple numbers of the same type, each of them will be in it's own object.

If a parameter is missing, the method throws an exception `"missing exception"`.

The format of the object in the array is:

```json
{ "firstname": "", "lastname": "", "number": { "type": "", "tel": "" } }
```

### Example

`type` work

```json
{
  "firstname": "Leila",
  "lastname": "Hökki",
  "number": { "type": "work", "tel": "385739234 " }
},
{
  "firstname": "Leila",
  "lastname": "Hökki",
  "number": { "type": "work", "tel": "585830384" }
},
{
  "firstname": "Matt",
  "lastname": "Smith",
  "number": { "type": "work", "tel": "998474732" }
}
```

`type` mobile

```json
{
  "firstname": "Matt",
  "lastname": "Smith",
  "number": { "type": "mobile", "tel": "044827422" }
}
```

## Tests

All tests use default data.

### Test 1. Type work.

returns

```json
{
  "firstname": "Leila",
  "lastname": "Hökki",
  "number": { "type": "work", "tel": "385739234 " }
},
{
  "firstname": "Leila",
  "lastname": "Hökki",
  "number": { "type": "work", "tel": "585830384" }
},
{
  "firstname": "Matt",
  "lastname": "Smith",
  "number": { "type": "work", "tel": "998474732" }
}
```

### Test 2. type mobile

```json
{
  "firstname": "Matt",
  "lastname": "Smith",
  "number": { "type": "mobile", "tel": "044827422" }
}
```
