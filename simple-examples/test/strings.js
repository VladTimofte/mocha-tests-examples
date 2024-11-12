// strings.js

import { expect } from "chai";

describe("String Tests", () => {
  const toUpperCase = (str) => str.toUpperCase();

  it('should return the length of a string', () => {
    expect('Hello').to.have.lengthOf(5)
  })

  it('should return the length of a string', () => {
    expect(toUpperCase('hello')).to.equal('HELLO')
  })
  
});
