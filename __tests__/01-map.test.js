const {
  getPokemonNames,
  addCaughtProperty,
  addAnyProperty,
} = require("../src/01-map");

describe("getPokemonNames()", () => {
  let pokemon;
  beforeEach(() => {
    jest.resetModules();
    pokemon = require("../data/pokemon_data");
  });

  let ghostPokemon;
  beforeEach(() => {
    jest.resetModules();
    ghostPokemon = require("../data/ghostPokemon_data");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!getPokemonNames.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should return an array of all pokemon names", () => {
    const actual = getPokemonNames(pokemon);
    const expected = [
      "Pikachu",
      "Charmander",
      "Bulbasaur",
      "Squirtle",
      "Gengar",
      "Abra",
      "Jigglypuff",
      "Dratini",
      "Lapras",
      "Onix",
      "Poliwag",
      "Gyarados",
      "Cloyster",
    ];
    expect(actual).toEqual(expected);
  });

  test("should work on different data sets of the same shape", () => {
    const actual = getPokemonNames(ghostPokemon);
    const expected = ["Gastly", "Haunter", "Gengar"];
    expect(actual).toEqual(expected);
  });
});

describe("addCaughtProperty()", () => {
  let pokemon;
  beforeEach(() => {
    jest.resetModules();
    pokemon = require("../data/pokemon_data");
  });
  let ghostPokemon;
  beforeEach(() => {
    jest.resetModules();
    ghostPokemon = require("../data/ghostPokemon_data");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!addCaughtProperty.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should add a `caught: false` property to each pokemon object in the array.", () => {
    const actual = addCaughtProperty(pokemon);
    const expected = require("./test-data/caught-pokemon");
    expect(actual).toEqual(expected);
  });

  test("should work on different data sets of the same shape", () => {
    const actual = addCaughtProperty(ghostPokemon);
    const expected = require("./test-data/caught-ghostPokemon");
    expect(actual).toEqual(expected);
  });
});

describe("addAnyProperty()", () => {
  let pokemon;
  beforeEach(() => {
    jest.resetModules();
    pokemon = require("../data/pokemon_data");
  });
  let ghostPokemon;
  beforeEach(() => {
    jest.resetModules();
    ghostPokemon = require("../data/ghostPokemon_data");
  });

  test("should use the `.map()` method", () => {
    const hasMap = !!addAnyProperty.toString().match(/\.map(\s*\(|\()/g);
    expect(hasMap).toBeTruthy();
  });

  test("should add an inputted key/value pair to each pokemon object in the array.", () => {
    const actual = addAnyProperty(pokemon, "age", 0);
    const expected = require("./test-data/addProp-pokemon");
    expect(actual).toEqual(expected);
  });

  test("should work dynamically with different data sets and inputs.", () => {
    const actual = addAnyProperty(ghostPokemon, "ghost-type", true);
    const expected = require("./test-data/addProp-ghostPokemon");
    expect(actual).toEqual(expected);
  });
});
