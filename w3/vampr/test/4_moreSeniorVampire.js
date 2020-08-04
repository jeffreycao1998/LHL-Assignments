const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("isMoreSeniorThan", () => {

    let offspring1, offspring2, offspring3, offspring4;
    beforeEach(() => {
      offspring1 = new Vampire();
      offspring2 = new Vampire();
      offspring3 = new Vampire();
      offspring4 = new Vampire();

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
    });

    it("should return true when called on root vampire", () => {
      expect(rootVampire.isMoreSeniorThan(offspring1)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring2)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring3)).to.equal(true);
      expect(rootVampire.isMoreSeniorThan(offspring4)).to.equal(true);
    });

    it("should return false when called with root vampire", () => {
      expect(offspring1.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring2.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring3.isMoreSeniorThan(rootVampire)).to.equal(false);
      expect(offspring4.isMoreSeniorThan(rootVampire)).to.equal(false);
    });

    it("should return true when a vampire is more senior", () => {
      expect(offspring3.isMoreSeniorThan(offspring4)).to.equal(true);
    });
    
    it("should return false when a vampire is not more senior", () => {
      expect(offspring4.isMoreSeniorThan(offspring3)).to.equal(false);
    });

  });
});