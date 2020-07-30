$(() => {

  window.fishtank = new Fishtank('fishtank');             // making it global to make debugging 1% easier.  shhhh.
  window.fishtank.registerSpecies(SwitchFish, GoFish, BiteFish);
  var starter = new Starter({
    tank: window.fishtank,     // look, it's Dependency Injection!  Pretend you care!
    position: new Vector(0, 0)
  });

});



