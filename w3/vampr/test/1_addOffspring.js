const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("addOffspring", () => {

    let offspring1;
    let offspring2;
    beforeEach(() => {
      offspring1 = new Vampire("andrew");
      offspring2 = new Vampire("sarah");
      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
    });

    it("should get added to offspring", () => {
      expect(rootVampire.offspring[0]).to.equal(offspring1);
      expect(rootVampire.offspring[1]).to.equal(offspring2);
    });
    it("should add parent as creator", () => {
      expect(offspring1.creator).to.equal(rootVampire);
      expect(offspring2.creator).to.equal(rootVampire);
    });

  });
});