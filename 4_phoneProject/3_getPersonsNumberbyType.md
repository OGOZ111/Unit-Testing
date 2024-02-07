# Test cases for getPersonsNumbersByType

### **getPersonsNumbersByType (firstname, lastname, type)**

Method returns an array of phone numbers of given type `type` belonging to given person with `firstname` and `lastname`.

For example Leila Hökki and work:

```json
["12345678", "385739234"]
```

Matt Smith and mobile.

```json
["044827422"]
```

If no person with given name is found, an empty array [] is returned.
If no number with given type is found, an empty array [] is returned.
If at least one parameter is missing, an exception is `"missing parameter"` is thrown.

## Tests

All test use the default data

### Test 1. Leila Hökki and work

parameters: firstname="Leila", lastname="Hökki" and type="work"

expect to return

```json
["87654321", "05040302"]
```

## Test 2. Matt Smith and mobile.

returns

```json
["0409812345"]
```

## Test 3. Wrong name or type

Test with values:
firstname Matt, lastname: smith type x
firstname Matt, lastname: x type mobile
firstname X, lastname smith type mobile

returns []

## Test 4. parameter missing

1 parameter missing: `Matt`, `Smith`
2 parameters missing: `Matt`,
All parameters missing

throws an exception 'missing parameter'

## Test 5. Test with an empty string as type.

Modified data:

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

Test with Leila Hökki and type ""

returns

```json
["385739234"]
```
