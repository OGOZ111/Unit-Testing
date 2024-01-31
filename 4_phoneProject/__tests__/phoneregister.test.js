"use strict";

const PhoneRegister = require("../phoneregister");
const phones = require("../phones.json");

describe("Test cases for the constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("Phone data missing");
  });
});

describe("Tests for getTypes", () => {
  test("Test 2: getTypes returns an array", () => {
    const register = new PhoneRegister(phones);
    expect(register.getTypes()).toEqual(["home", "work", "mobile"]);
  });
});
