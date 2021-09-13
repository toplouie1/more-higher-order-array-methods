const {
  findBySpecies,
  findByNumOfMoves,
  findByMove,
} = require("../src/03-find");

describe("findBySpecies()", () => {
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

  test("should use the `.find()` method", () => {
    const hasFind = !!findBySpecies.toString().match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the first pokemon object in the array that matches the inputted species.", () => {
    const actual = findBySpecies(pokemon, "Shadow Pokemon");
    const expected = {
      name: "Gengar",
      species: "Shadow Pokemon",
      type: "ghost, poison",
      weaknesses: "ghost, dark",
      strongAgainst: "ghost, psychic",
      moves: [
        {
          name: "night shade",
          type: "ghost",
        },
        {
          name: "curse",
          type: "ghost",
        },
        {
          name: "sucker punch",
          type: "dark",
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("should be case insensitive", () => {
    const actual = findBySpecies(ghostPokemon, "shadow pokemon");
    const expected = {
      name: "Gengar",
      species: "Shadow Pokemon",
      type: "ghost, poison",
      weaknesses: "ghost, dark",
      strongAgainst: "ghost, psychic",
      moves: [
        {
          name: "night shade",
          type: "ghost",
        },
        {
          name: "curse",
          type: "ghost",
        },
        {
          name: "sucker punch",
          type: "dark",
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("if no match is found, should return undefined.", () => {
    const actual = findBySpecies(pokemon, "Egg Pokemon");
    const expected = undefined;
    expect(actual).toEqual(expected);
  });
});

describe("findByNumOfMoves()", () => {
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

  test("should use the `.find()` method", () => {
    const hasFind = !!findByNumOfMoves.toString().match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the first pokemon object in the array that matches the inputted number of moves.", () => {
    const actual = findByNumOfMoves(pokemon, 1);
    const expected = {
      name: "Abra",
      species: "Psi Pokemon",
      type: "psychic",
      weaknesses: "bug, ghost, dark",
      strongAgainst: "fighting, poison",
      moves: [
        {
          name: "teleport",
          type: "psychic",
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("if no match is found, should return 'Sorry, could not find a pokemon that has <inputted num> move(s).'.", () => {
    const actual = findByNumOfMoves(pokemon, 12);
    const expected = "Sorry, could not find a pokemon that has 12 move(s).";
    expect(actual).toEqual(expected);
  });
});

describe("findByMove()", () => {
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

  test("should use the `.find()` method", () => {
    const hasFind = !!findByMove.toString().match(/\.find(\s*\(|\()/g);
    expect(hasFind).toBeTruthy();
  });

  test("should return the first pokemon object in the array that matches the inputted move.", () => {
    const actual = findByMove(pokemon, "poison powder");
    const expected = {
      name: "Bulbasaur",
      species: "Seed Pokemon",
      type: "grass, poison",
      weaknesses: "flying, poison, bug, fire, ice, psychic",
      strongAgainst: "ground, rock, water",
      moves: [
        {
          name: "razor leaf",
          type: "grass",
        },
        {
          name: "sleep powder",
          type: "grass",
        },
        {
          name: "poison powder",
          type: "poison",
        },
      ],
    };
    expect(actual).toEqual(expected);
  });

  test("if no match is found, should return null.", () => {
    const actual = findByMove(pokemon, "backflip");
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
