const chai = require('chai');
const expect = chai.expect;

const Vampire = require('../vampire.js');

describe("Vampire", function() {

  let rootVampire;
  beforeEach( function() {
    rootVampire = new Vampire("root");
  });

  describe("closestCommonAncestor", function() {

    let offspring1, offspring2, offspring3, offspring4, offspring5, offspring6, offspring7, offspring8;
    beforeEach(() => {
      offspring1 = new Vampire("a");
      offspring2 = new Vampire("b");
      offspring3 = new Vampire("c");
      offspring4 = new Vampire("d");
      offspring5 = new Vampire("e");
      offspring6 = new Vampire("f");
      offspring7 = new Vampire("g");
      offspring8 = new Vampire("h");

      rootVampire.addOffspring(offspring1);
      rootVampire.addOffspring(offspring2);
      rootVampire.addOffspring(offspring3);
      offspring3.addOffspring(offspring4);
      offspring3.addOffspring(offspring5);
      offspring5.addOffspring(offspring6);
      offspring6.addOffspring(offspring7);
      offspring2.addOffspring(offspring8);
    });

    it("should be the root vampire for any vampire and the root vampire", () => {
      expect(rootVampire.closestCommonAncestor(offspring2).name).to.equal(rootVampire.name);
      expect(rootVampire.closestCommonAncestor(offspring7).name).to.equal(rootVampire.name);
    })

    it("should be the root vampire for first two offspring", () => {
      expect(offspring1.closestCommonAncestor(offspring2).name).to.equal(rootVampire.name);
    })

    it("should be offspring 3 for offspring 4 and 7", () => {
      expect(offspring4.closestCommonAncestor(offspring7).name).to.equal(offspring3.name);
      expect(offspring7.closestCommonAncestor(offspring4).name).to.equal(offspring3.name);
    })

    it("should be that vampire if same vampire is used", () => {
      expect(offspring4.closestCommonAncestor(offspring4).name).to.equal(offspring4.name);
    })

    it("should be the more senior vampire if a direct ancestor is used", () => {
      expect(offspring6.closestCommonAncestor(offspring7).name).to.equal(offspring6.name);
      expect(offspring7.closestCommonAncestor(offspring6).name).to.equal(offspring6.name);
    })

    it("should be root for offspring 8 and offspring 7", () => {
      expect(offspring7.closestCommonAncestor(offspring8).name).to.equal(rootVampire.name);
      expect(offspring8.closestCommonAncestor(offspring7).name).to.equal(rootVampire.name);
    })
  });
});
