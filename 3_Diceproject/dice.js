"use strict";

module.exports = class Dice {
  #upperBound;
  #dotCount;

  constructor(upperBound = 6) {
    if (!Number.isInteger(upperBound)) {
      throw new Error("upper bound must be an integer");
    }

    if (upperBound > 20) {
      throw new Error("upper bound too big");
    }
    if (upperBound < 2) {
      throw new Error("upper bound too small");
    }
    this.#upperBound = upperBound;
    this.#dotCount = 0;
  }

  // Getters
  get dots() {
    return this.#dotCount;
  }

  get maximumValue() {
    return this.#upperBound;
  }

  get minimumValue() {
    return 1;
  }

  // Methods

  roll() {
    // 0<=rand<1
    this.#dotCount = Math.floor(Math.random() * this.#upperBound) + 1;
  }

  toString() {
    if (this.#dotCount === 0) {
      return "Not rolled yet";
    }
    return `${this.#dotCount}`;
  }
};
