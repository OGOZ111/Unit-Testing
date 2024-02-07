"use strict";

module.exports = class PhoneRegister {
  #register;
  constructor(data) {
    if (!data) throw new Error("Phone data missing");
    this.#register = data;
  }

  getTypes() {
    const foundTypes = [];
    for (const person of this.#register) {
      for (const phone of person.phones) {
        if (!foundTypes.includes(phone.type)) {
          foundTypes.push(phone.type);
        }
      }
    }

    return foundTypes;
  }

  getPersonsNumbersByType(firstnamee, lastname, type) {
    if (arguments.length < 3) {
      throw new Error("missing parameter");
    }
    const numbersFound = [];
    for (const person of this.#register) {
      if (person.firstname === firstnamee && person.lastname === lastname) {
        for (const phone of person.phones) {
          if (phone.type === type) {
            numbersFound.push(phone.number);
          }
        }
        return numbersFound;
      }
      return numbersFound;
    }
  }
};
