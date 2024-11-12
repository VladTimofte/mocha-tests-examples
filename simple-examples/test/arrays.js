// arrays.js

import { expect } from "chai";

describe("Array Tests", () => {
  it("should add an item to an array", () => {
    const arr = [];
    arr.push("item1");
    expect(arr).to.have.lengthOf(1);
    expect(arr[0]).to.equal("item1");
  });

  it("should remove an item to an array", () => {
    const arr = ["item1", "item2", "item3"];
    arr.pop();
    expect(arr).to.have.lengthOf(2);
    expect(arr).to.not.include('item3')
  });

  it('should sort an array of numbers in ascending order', () => {
    const arr = [3, 1, 2]
    arr.sort((a, b) => a - b)
    expect(arr).to.deep.equal([1, 2, 3])
  });
});
