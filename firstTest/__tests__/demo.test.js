"use strict";

beforeAll(() => {
  console.log("beforeAll", "init before all tests".toUpperCase());
});

afterAll(() => {
  console.log("afterAll", "do cleaning".toLocaleUpperCase());
});

test("This is the first test", () => {
  console.log("test one");
  expect("1" + "2").toBe("12");
});

// test and it are the same to run.
it("This is the second test", () => {
  console.log("test 2");
});

describe("This is the first group A", () => {
  beforeEach(() => {
    console.log("beforeEach in group A");
  });

  afterEach(() => {
    console.log("afterEach in group A");
  });

  test("test 1 in A", () => {
    console.log("test 1 in A");
  });
  test("test 2 in A", () => {
    console.log("test 2 in A");
  });
});

describe("Group B", () => {
  describe("group B.A", () => {
    test("test 1 in B.BA", () => {
      console.log("test 1 in B.A");
      expect("1" + "2").toBe("12");
    });
  });
  describe("group B.B", () => {});
});
