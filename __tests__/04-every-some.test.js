const {
  checkForType,
  checkForTypeWeakness,
  checkIfAllAreCertainType,
  areAllStrongAgainstType,
  checkForMove,
} = require("../src/04-every-some");

describe("checkForType()", () => {
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

  test("should use the `.some()` method", () => {
    const hasSome = !!checkForType.toString().match(/\.some(\s*\(|\()/g);
    expect(hasSome).toBeTruthy();
  });

  test("should return false if no pokemon match the inputted type.", () => {
    expect(checkForType(pokemon, "fighting")).toEqual(false);
  });

  test("should return true if one or more pokemon match the inputted type.", () => {
    expect(checkForType(pokemon, "ice")).toEqual(true);
  });

  test("should be dynamic and work for any data sets or inputs.", () => {
    expect(checkForType(ghostPokemon, "ice")).toEqual(false);
    expect(checkForType(ghostPokemon, "poison")).toEqual(true);
  });
});

describe("checkForTypeWeakness()", () => {
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

  test("should use the `.some()` method", () => {
    const hasSome = !!checkForTypeWeakness
      .toString()
      .match(/\.some(\s*\(|\()/g);
    expect(hasSome).toBeTruthy();
  });

  test("should return true if one or more pokemon are weak against the inputted type.", () => {
    expect(checkForTypeWeakness(pokemon, "fighting")).toEqual(true);
  });

  test("should return false if none of the pokemon are weak against the inputted type.", () => {
    expect(checkForTypeWeakness(pokemon, "normal")).toEqual(false);
  });

  test("type parameter should be set to 'dragon' by default", () => {
    expect(checkForTypeWeakness(pokemon)).toEqual(true);
    expect(checkForTypeWeakness(ghostPokemon)).toEqual(false);
  });

  test("should be dynamic and work for any data sets or inputs.", () => {
    expect(checkForTypeWeakness(ghostPokemon, "dark")).toEqual(true);
  });
});

describe("checkIfAllAreCertainType()", () => {
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

  test("should use the `.every()` method", () => {
    const hasEvery = !!checkIfAllAreCertainType
      .toString()
      .match(/\.every(\s*\(|\()/g);
    expect(hasEvery).toBeTruthy();
  });

  test("should return true if all pokemon match the inputted type.", () => {
    expect(checkIfAllAreCertainType(pokemon, "ghost")).toEqual(false);
  });

  test("should return false if one or more pokemon do NOT match the inputted type.", () => {
    expect(checkIfAllAreCertainType(ghostPokemon, "ghost")).toEqual(true);
  });
});

describe("areAllStrongAgainstType()", () => {
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

  test("should use the `.every()` method", () => {
    const hasEvery = !!areAllStrongAgainstType
      .toString()
      .match(/\.every(\s*\(|\()/g);
    expect(hasEvery).toBeTruthy();
  });

  test("should return true if all pokemon are strong against the inputted type.", () => {
    expect(areAllStrongAgainstType(pokemon, "ghost")).toEqual(false);
  });

  test("should return false if one or more pokemon are NOT strong against the inputted type.", () => {
    expect(areAllStrongAgainstType(ghostPokemon, "psychic")).toEqual(true);
  });
});

describe("checkForMove()", () => {
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

  test("should use the `.some()` method", () => {
    const hasSome = !!checkForMove.toString().match(/\.some(\s*\(|\()/g);
    expect(hasSome).toBeTruthy();
  });

  test("should return true if one or more pokemon have the inputted move.", () => {
    expect(checkForMove(pokemon, "teleport")).toEqual(true);
  });

  test("should return false if none of the pokemon have the inputted move.", () => {
    expect(checkForMove(pokemon, "surf")).toEqual(false);
  });

  test("should be dynamic and work for other similar data sets.", () => {
    expect(checkForMove(ghostPokemon, "hex")).toEqual(true);
    expect(checkForMove(ghostPokemon, "spite")).toEqual(false);
  });
});
