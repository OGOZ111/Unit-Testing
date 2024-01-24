# Test cases for Dice.

## **constructor(upperBound)**

1. Create a dice with no upper bound given initializes dice with upper
   bound 6.

   - maximumValue is 6.
   - minimumValue is 1.
   - dots is 0

2. Create a dice with upper bound 2-20.

   - maximumValue is upper bound.
   - minimumValue is 1.
   - dots is 0

3. Test the exceptions.

   - 0 throws `'upper bound too small'`
   - 1 throws `'upper bound too small'`
   - -1 throws `'upper bound too small'`
   - -10 throws `'upper bound too small'`
   - 21 throws `'upper bound too big'`
   - 'a' throws `'upper bound must be an integer'`
   - '1' throws `'upper bound must be an integer'`
   - 2.5 throws `'upper bound must be an integer'`

## Test cases for **roll()**

### Create dice with no upper bound

- If not rolled, dots is 0 (optional, is already tested in other test)
- When rolled, the dots is
  - greater than or equal to 1.
  - less than or equal to 6.

### Create dice with upper bound 20 (or 2 -> 20)

- When rolled, the dots is
  - greater than or equal to 1.
  - less than or equal to 20 (or upper bound).

## Test cases for **toString()**

- In both cases create a new dice. (No upper bound given)
  - Roll the dice. Compare resulting text with dots converted to text.
  - Don't roll the dice. Compare the results to `'Not rolled yet'`.

## Testing getters

### minimumValue

- Expect it to be 1.

### maximumValue

- Expect it to be the upper bound( 2 -> 20 ).

### dots

- If not rolled, expect it to be 0.
