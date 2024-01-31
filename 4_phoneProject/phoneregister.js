"use strict";

module.exports = class PhoneRegister {
  #register;
  constructor(data) {
    if (!data) throw new Error("Phone data missing");
    this.#register = data;
  }
};
