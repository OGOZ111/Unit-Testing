"use strict";

const PhoneRegister = require("../phoneregister");
const phones = require("../phones.json");

describe("Test cases for the constructor", () => {
  test("Test 1: missing parameter throws an exception", () => {
    expect(() => new PhoneRegister()).toThrow("Phone data missing");
  });
});

test("Test 2: some type will be an empty string", () => {
  const testData = [
    {
      firstname: "Leila",
      lastname: "Hökki",
      phones: [
        { type: "home", number: "12345678" },
        { type: "", number: "385739234" },
        { type: "work", number: "585830384" },
      ],
    },
    {
      firstname: "Matt",
      lastname: "Smith",
      phones: [{ type: "work", number: "998474732" }],
    },
  ];
  const register = new PhoneRegister(testData);
  const expectedResult = ["home", "", "work"];
  expect(register.getTypes()).toEqual(expectedResult);
});

test("Test 3. Only home phones", () => {
  const testData = [
    {
      firstname: "Leila",
      lastname: "Hökki",
      phones: [
        { type: "home", number: "12345678" },
        { type: "", number: "385739234" },
        { type: "home", number: "585830384" },
      ],
    },
    {
      firstname: "Matt",
      lastname: "Smith",
      phones: [{ type: "home", number: "998474732" }],
    },
  ];
  const register = new PhoneRegister(testData);
  expect(register.getTypes()).toEqual(["home"]);
});

test("Test 4. No phones", () => {
  const testData = [
    {
      firstname: "Leila",
      lastname: "Hökki",
      phones: [],
    },
    {
      firstname: "Matt",
      lastname: "Smith",
      phones: [],
    },
  ];
  const register = new PhoneRegister(testData);
  expect(register.getTypes()).toEqual([]);
});

test("Test 5. No persons", () => {
  const register = new PhoneRegister([]);
  expect(register.getTypes()).toEqual([]);
});

describe("Testing getPersonsNumbersByType", () => {
  const register = new PhoneRegister(phones);

  describe("Tests 1 - 3", () => {
    const testValues = [
      // numbers from json file
      ["Leila", "Hökki", "work", ["385739234", "585830384"]],
      ["Matt", "Smith", "mobile", ["044827422"]],
      ["Matt", "Smith", "x", []],
      ["Matt", "x", "mobile", []],
      ["x", "Smith", "mobile", []],
    ];
    test.each(testValues)("%s %s %s", (firstname, lastname, type, result) => {
      expect(
        register.getPersonsNumbersByType(firstname, lastname, type)
      ).toEqual(result);
    });
  });
  describe("Test 4 parameters missing", () => {
    test("1 parameter missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt", "Smith")).toThrow(
        "missing parameter"
      );
    });
    test("2 parameters missing", () => {
      expect(() => register.getPersonsNumbersByType("Matt")).toThrow(
        "missing parameter"
      );
    });
    test("all parameters missing", () => {
      expect(() => register.getPersonsNumbersByType()).toThrow(
        "missing parameter"
      );
    });
  });
  describe("Test 5. Testing an empty string as a type", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "", number: "385739234" },
          { type: "work", number: "585830384" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "Smith",
        phones: [{ type: "work", number: "998474732" }],
      },
    ];
    const modifiedRegister = new PhoneRegister(testData);
    test("Leila Hökki type ''", () => {
      expect(
        modifiedRegister.getPersonsNumbersByType("Leila", "Hökki", "")
      ).toEqual(["385739234"]);
    });
  });
});
