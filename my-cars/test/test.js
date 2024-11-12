// test.js

import { expect } from "chai";
import { getCars, saveCar, deleteCar } from "../src/storage.js";

import { LocalStorage } from "node-localstorage";
global.localStorage = new LocalStorage("./scratch");

describe("Car Storage Functions", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should save a car", () => {
    const car = {
      licensePlate: "BH00QWE",
      itp: "2025-11-12",
      insurance: "2025-11-12",
      rovignette: "2025-11-12",
    };
    saveCar(car);

    const cars = getCars();

    expect(cars).to.have.lengthOf(1);
    expect(cars[0]).to.deep.equal(car);
  });

  it("should get all cars", () => {
    const car1 = {
      licensePlate: "BH00QWE",
      itp: "2025-11-12",
      insurance: "2025-11-12",
      rovignette: "2025-11-12",
    };
    const car2 = {
      licensePlate: "BH00QWR",
      itp: "2025-11-12",
      insurance: "2025-11-12",
      rovignette: "2025-11-12",
    };
    saveCar(car1);
    saveCar(car2);

    const cars = getCars();

    expect(cars).to.have.lengthOf(2);
  });
  it('should delete a car by index', () => {
    const car1 = {
        licensePlate: "BH00TOT",
        itp: "2025-11-12",
        insurance: "2025-11-12",
        rovignette: "2025-11-12",
      };
      const car2 = {
        licensePlate: "B123TOT",
        itp: "2025-11-12",
        insurance: "2025-11-12",
        rovignette: "2025-11-12",
      };

      saveCar(car1)
      saveCar(car2)

      deleteCar(0)
      const cars = getCars()

      expect(cars).to.have.lengthOf(1)
      expect(cars[0]).to.deep.equal(car2)
  });
});
