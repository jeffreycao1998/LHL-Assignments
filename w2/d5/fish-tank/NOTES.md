

Some work students could do:
  * add methods
    * (methods, that is, that meaningfully collaborate with other classes/anythings)
    * ??????????
  * add classes
    * add a bunch of new fisheses?
    * SimpleFish
    * BiteFish
  * maybe having fish produce fish-seeds is a good student exercise
  * refactor methods to be better encapsulated
    * better use of properties and methods?
    * just smaller methods?
    * getters that do computation?
      * for example factor out Fish.getVelocity() (so that subclasses can override it when surging)
  * replace some if-else logic with subclassing?

I'm kinda not sure about the latter two ideas, but the problem with the first two, as noted by KV, is that it's too easy
to do by copy-pasting without understanding.  I agree that that concern is real.


Desired features:
  * Seeds should be able to go above the top of the tank without despawning, so they can fall back in
  * Fish should change direction to face correctly
  * Seeds should have a timer; if they're unhatched (and still alive) when the timer ends, they hatch naturally

* If I do denizen.findDenizensWithinRadius(r), they can do the BiteFish?
  * and/or do another simpleFish, possibly as a warmup to doing the BiteFish





List of collaborations:
  FishTank -> Denizens (via registerDenizen)
  Denizens -> Fishtank (need it in the constructor)
  Starter -> Seed (for onClick)
  Seed -> Fish-and-whatever
  Fish -> Seed (assuming we get breeding working)
  BiteFish -> Fish (assuming we do BiteFishes eating other fish)

I want another sub-tree of collaboration.


