# Test cases for getName

### **getName(number)**

The method searches the given phone number from the registry. If the number is found, method returns the owner of that number as an object.

```json
{ "firstname": "", "lastname": "" }
```

If no phone with given number is found, the method returns null.
If the parameter is missing, null is also returned.

## Tests

All test use default data

### Test 1 getName for number "585830384"

returns

```json
{ "firstname": "Leila", "lastname": "Hökki" }
```

### Test 2. getName for number "044827422"

returns

```json
{ "firstname": "Matt", "lastname": "Smith" }
```

### Test 3. Wrong number "0000034"
returns null

### Test 4. missing parameter
returns null 