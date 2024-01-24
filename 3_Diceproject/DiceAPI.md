# Dice Class API

This is a Dice Class for dice games. Dice holds the number of dots.
The number of dots is between 1 and given upper bound (included).
THe maximum upper bound is 20.
The minimum upper bound is 2.

If the dice hasn't been rolled, the number of dots is 0. After the dice has been rolled,
the dot count can't become zero.

## Operations

### **constructor(upperBound)**

- Initializes the dice with upper bound that is passed as a parameter.
- If no upper bound is given, the default will be 6.
- Initializes the dot count to 0.

- If uppeer bound is not a number and not an integer, throw an exception.
  `'upper bound must be an integer'`

- If the upper bound is not between 2 and 20, an exception is thrown:

  - upper bound >20: `'upperbound too big'`
  - upper bound <2: `'upper bound too small'`

  ### Methods

  #### **roll()**

  - Rolls the dice.
  - When rolled, the dot count will become a random number between 1 and then upper bound.
  - Returns nothing.

  #### **toString()**
