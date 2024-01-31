# Phone API

## Data

Data will be in a json file. A person can be in the data array only once. Names are unique so for example Leila Hökki can't exist twice in the json. Phone number is unique and can be only once the the json. We also assume that the json file is valid and no field is missing.

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
