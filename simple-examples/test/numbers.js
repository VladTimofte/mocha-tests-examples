// numbers.js

import { expect } from "chai";

describe("Number Tests", () => {
  const isPositive = (num) => num > 0; // Boolean

  it("should check if a number is positive", () => {
    expect(isPositive(10)).to.be.true;
    expect(isPositive(-10)).to.be.false;
  });

  it("should generate a random number within a range", () => {
    const min = 1;
    const max = 10;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    expect(randomNum).to.be.at.least(1).and.at.most(10)
  });
});
