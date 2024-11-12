// objects.js

import { expect } from "chai";

describe("Object Tests", () => {
  const createuser = (name, age) => ({ name, age });

  it('should create a user with a given name and age', () => {
    const user = createuser('Alice', 25)
    expect(user).to.have.property('name', 'Alice')
    expect(user).to.have.property('age', 25)
  })

  it('should create a user with a given name and age', () => {
    const user1 = createuser('Bob', 25)
    const user2 = createuser('Bob', 25)

    expect(user1).to.deep.equal(user2)
  })

});
