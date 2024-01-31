"use strict";

const Dice = require("../dice");

describe("create a dice with no upper bound given", () => {
  const dice = new Dice();

  test("maximumValue is 6", () => {
    expect(dice.maximumValue).toBe(6);
  });

  test("mimnumValue is 1", () => {
    expect(dice.minimumValue).toBe(1);
  });

  test("dots is 0", () => {
    expect(dice.dots).toBe(0);
  });
});

describe("create a dice with an upper bound of 2-20", () => {
  const testValues = new Array(19)
    .fill(2)
    .map((value, index) => [value + index]);

  test.each(testValues)("test upper bound %s", (ubound) => {
    const dice = new Dice(ubound);
    expect(dice.maximumValue).toBe(ubound);
    expect(dice.minimumValue).toBe(1);
    expect(dice.dots).toBe(0);
  });
});

describe("Test the exceptions", () => {
  const testValues = [
    [0, "upper bound too small"],
    [1, "upper bound too small"],
    [-1, "upper bound too small"],
    [-10, "upper bound too small"],
    [21, "upper bound too big"],
    ["a", "upper bound must be an integer"],
    ["1", "upper bound must be an integer"],
    [2.5, "upper bound must be an integer"],
  ];

  test.each(testValues)("upper bound %s throws %s", (ubound, text) => {
    expect(() => new Dice(ubound)).toThrow(text);
  });
});

describe("Test the roll method", () => {
  test("Create dice with no upper bound", () => {
    const dice = new Dice();
    dice.roll();
    expect(dice.dots).toBeGreaterThanOrEqual(1);
    expect(dice.dots).toBeLessThanOrEqual(6);
  });
  test("Create dice with no upper bound 20", () => {
    const dice = new Dice(20);
    dice.roll();
    expect(dice.dots).toBeGreaterThanOrEqual(1);
    expect(dice.dots).toBeLessThanOrEqual(20);
  });
});

describe("Testing the toString method", () => {
  let dice;
  beforeEach(() => {
    dice = new Dice();
  });

  test("Dice rolled", () => {
    dice.roll();
    expect(dice.toString()).toBe(`${dice.dots}`);
  });
  test("Dice not rolled", () => {
    expect(dice.toString()).toBe("Not rolled yet");
  });
});

// Wed Jan 31 Lesson

describe("Test roll with distribution", () => {
  describe("create dice with no upper bound given", () => {
    const dice = new Dice();
    const dotCounts = [];

    for (let i = 0; i < 10; i++) {
      test("when rolled", () => {
        dice.roll();
        expect(dice.dots).toBeGreaterThanOrEqual(1);
        expect(dice.dots).toBeLessThanOrEqual(6);
      });
    }

    test("dot distribution ok", () => {
      for (let i = 0; i < 10; i++) {
        dice.roll();
        dotCounts.push(dice.dots);
      }
      console.log(dotCounts);
      expect(new Set(dotCounts).size === 6).toBe(true);
    });
  });
});
