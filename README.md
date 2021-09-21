# Array Methods Practice

If you need more practice with array methods like .filter, .some, .every, .map, and .find, then this repo is for you!

## Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below.

## Instructions

Complete each function inside of the `src/` folder. The comments and tests will help you determine what each function requires.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your repository.

```
npm test
```

This will run the test output once.

### Run one file at a time

Since there are several files in this repo, it's recommended that you run _one file at a time_ as you work through them. Like so:

```
npm test 00
```

```
npm test 01
```

```
npm test 02
```

```
npm test 03
```

```
npm test 04
```

### Run tests individually

_After choosing a specific file to run,_ you can also specify which test you want to run. Add `.only` after either `test` or `describe` for the specific test you'd like to run.

```js
test.only("should return an array of all pokemon names.", () => {
```

This will either run the specific `test` or, in the case of adding `.only` to a `describe`, all of the tests for a specific function.

### Run file

If you want to manually test out your file, you can do so by running the following command.

```
node src/00-warmUp.js
```
```
node src/01-map.js
```
```
node src/02-filter.js
```
etc.
The output will be printed to your terminal.
