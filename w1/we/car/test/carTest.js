const chai = require('chai');
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js');

describe("#shouldBuyCar()", function() {

  it("should return false if it's a hatchback", function() {
    const car = {
      type: 'hatchback'
    };

    assert.isFalse(shouldBuyCar(car));
  });

  it('should return true when the car is pink', () => {
    const car = {
      color: 'pink'
    };

    assert.isTrue(shouldBuyCar(car));
  });

  it('should return false if type is hatchback and color is pink', () => {
    const car = {
      type: 'hatchback',
      color: 'pink'
    }

    assert.isFalse(shouldBuyCar(car));
  });

  it('should return true when the car has 6 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 6,
      price: 4999
    }

    assert.isTrue(shouldBuyCar(car));
  });

  it('should return true when the car has 11 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 11,
      price: 4999
    }

    assert.isTrue(shouldBuyCar(car));
  });

  it('should return false when the car has 6 litres/100km and is over $5,000', () => {
    const car = {
      litresPer100km: 6,
      price: 5001
    }

    assert.isFalse(shouldBuyCar(car));
  });

  it('should return false when the car has 11 litres/100km and is over $5,000', () => {
    const car = {
      litresPer100km: 11,
      price: 5001
    }

    assert.isFalse(shouldBuyCar(car));
  });

  it('should return false when the car has 5 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 5,
      price: 4999
    }

    assert.isFalse(shouldBuyCar(car));
  });

  it('should return false when the car has 12 litres/100km and is under or equal to $5,000', () => {
    const car = {
      litresPer100km: 12,
      price: 4999
    }

    assert.isFalse(shouldBuyCar(car));
  });

  it('should return undefined when there is no car', () => {
    assert.isUndefined(shouldBuyCar());
  });

});

// const car = {
//   price: 4999,
//   color: 'pink',
//   type: 'hatchback',
//   litresPer100km: 6
// }