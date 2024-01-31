# Phone API

## Data

Data will be in a json file. A person can be in the data array only once. Names are unique so for example Leila Hökki can't exist twice in the json. Phone number is unique and can be only once the the json. We also assume that the json file is valid and no field is missing. An empty phones array is okay also all person may be missing so the data in an empty array.

### phones.json

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
    "phones": [
      { "type": "home", "number": "495838242" },
      { "type": "mobile", "number": "044827422" },
      { "type": "work", "number": "998474732" }
    ]
  }
]
```

## Class PhoneRegister

### **constructor(data)**

Phones json array is passed in as a parameter `data`. If parameter is missing, throws an exception `"phone data missing"`

### **getTypes()**

returns all phone types in an array. The type is added to the result array only once in the order the are found.
If there are no phones or no persons, an empty array [] is returned.

For example:

```json
["home", "work", "mobile"]
```

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

### **getAllNumbers()**

Returns all phone numbers in an array, each as a person object of form:

```json
{ "firstname": "", "lastname": "", "phones": [] }
```

The phone object in phones array is of form:

```json
{ "type": "", "number": "" }
```

If a person doesn't have a phone (the phone field is an empty array),
the person is not added into the result array. If all persons are missing, an empty array is returned.

### **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that number as an object.

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns null.
If the parameter is missing, null is also returned.
