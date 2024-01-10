# Jest project

## 1. Create folder for the project

## 2. Create package.json

```shell
npm init -y
```

or

```shell
npm init
```

and answer setup questions

## 3. Install Jest as devDependencies

```shell
npm install jest --save-dev
```

## 4. Modify package.json test-script

```json
  "scripts": {
    "test": "jest"
  }
```

## 5. Create a test folder named `__tests__`

folder requires double undscore on both sides

## 6. Write tests into `__tests__` folder

test file name should have test or spec in the name

fileName.test.js
fileName.spec.js

for example to test file abc.js you would use test file named abc.test.js

## 7. run the test

```shell
npm test
```

## 7B. To run only one test file

```
npm test --testFile fileName.test.js
```
