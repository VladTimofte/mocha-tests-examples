// functions.js

import { expect } from "chai";

describe("Function Tests", () => {
  function add(a, b) {
    return a + b;
  }

  function isEven(num) {
    return num % 2 === 0;
  }

  it("should return the sum of thwo numbers", () => {
    expect(add(2, 3)).to.equal(5);
    expect(add(-1, -1)).to.equal(-2);
  });

  it("should return true if the number is even", () => {
    expect(isEven(4)).to.be.true;
    expect(isEven(7)).to.be.false;
  });
});
