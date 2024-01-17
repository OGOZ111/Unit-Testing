## Test cases for Calc Library API

## **Sum(a,b)**

Function Returns the sum of the two numbers. Numbers are passed as parameters a and b.

Returns the sum of the given numbers

If parameter is missing, throws an exception `'parameter missing'`.
If parameters are not numbers, throws an exception
`'only numbers allowed`

## sum with integers

sum(1,1) returns 2
sum(2,3) return 5

a, b, result
[-2, -4, 6],
[-2, 4, 2],
[ 2, -4, -2],
[ 0, 0, 0],
[ 3, 0, 3],
[ 0, -3, -3],
[-3, 0, -3],
[123, 200, 323]

## sum with floats

a, b, result
[10, 11.5, 21.5],
[2.5, 3. 5.5],
[-2.5, 3, 0.5],
[3, -2.4, 0.6],
[-2.5, -2.5, -5],
[-2.5, 2.5, 0]
[2.4, -2.5, -0.1]

## parameter is missing

- sum() throws an exception `'parameter is missing'`
- sum(1) throws an exception `'parameter is missing'`
- sum('') throws an exception `'parameter is missing'`
- sum('1') throws an exception `'parameter is missing'`

## parameters are not numbers

- sum('1', '2') throws an exception `'only numbers allowed'`
- sum('a', 1) throws an exception `'only numbers allowed'`
- sum(1, 'a') throws an exception `'only numbers allowed'`
- sum('a', 'b') throws an exception `'only numbers allowed'`
- sum('', '') throws an exception `'only numbers allowed'`
