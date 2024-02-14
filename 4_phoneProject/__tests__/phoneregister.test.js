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

describe("Testing getAllNumbersByType", () => {
  const register = new PhoneRegister(phones);

  test("Test 1. Type work", () => {
    const result = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "385739234 " },
      },
      {
        firstname: "Leila",
        lastname: "Hökki",
        number: { type: "work", tel: "585830384" },
      },
      {
        firstname: "Matt",
        lastname: "Smith",
        number: { type: "work", tel: "998474732" },
      },
    ];
    expect(register.getAllNumbersByType("work")).toEqual(result);
  });
  test("Test 2. Type mobile", () => {
    const result = [
      {
        firstname: "Matt",
        lastname: "Smith",
        number: { type: "mobile", tel: "044827422" },
      },
    ];
    expect(register.getAllNumbersByType("mobile")).toEqual(result);
  });
  test("Test 3. Type x", () => {
    expect(register.getAllNumbersByType("x")).toEqual([]);
  });
  test("Test 4. missing paramater", () => {
    expect(() => register.getAllNumbersByType()).toThrow("missing parameter");
  });
});

describe("Testing getAllNumbers", () => {
  test("Test 1. Testing with default data", () => {
    const register = new PhoneRegister(phones);
    expect(register.getAllNumbers()).toEqual(phones);
  });

  test("Test 2. Some phones are missing", () => {
    const testData = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "585830384" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "Smith",
        phones: [],
      },
    ];
    const result = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "585830384" },
        ],
      },
    ];
    const register = new PhoneRegister(testData);

    expect(register.getAllNumbers()).toEqual(result);
  });

  test("Test 3. some phone missing", () => {
    const testData = [
      {
        firstname: "Vera",
        lastname: "Smith",
        phones: [],
      },
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "385739234" },
          { type: "work", number: "585830384" },
        ],
      },
      {
        firstname: "Matt",
        lastname: "Smith",
        phones: [],
      },
      {
        firstname: "Mary",
        lastname: "Janes",
        phones: [{ type: "home", number: "87654321" }],
      },
    ];
    const result = [
      {
        firstname: "Leila",
        lastname: "Hökki",
        phones: [
          { type: "home", number: "12345678" },
          { type: "work", number: "385739234" },
          { type: "work", number: "585830384" },
        ],
      },
      {
        firstname: "Mary",
        lastname: "Janes",
        phones: [{ type: "home", number: "87654321" }],
      },
    ];
    const register = new PhoneRegister(testData);
    expect(register.getAllNumbers()).toEqual(result);
  });

  test("Test 4. All phones are missing", () => {
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
    expect(register.getAllNumbers()).toEqual([]);
  });

  test("Test 5. All persons missing", () => {
    const register = new PhoneRegister([]);
    expect(register.getAllNumbers()).toEqual([]);
  });
});

describe("Testing getName", () => {
  const register = new PhoneRegister(phones);

  describe("Test 1 and 2", () => {
    const testValues = [
      ["585830384", { firstname: "Leila", lastname: "Hökki" }],
      ["044827422", { firstname: "Matt", lastname: "Smith" }],
    ];
    test.each(testValues)("%s return %p", (number, result) => {
      expect(register.getName(number)).toEqual(result);
    });
  });
  test("Test 3. wrong number 000023", () => {
    expect(register.getName("000023")).toBeNull();
  });
  test("Test 4, missing parameter", () => {
    expect(register.getName()).toBeNull();
  });
});
