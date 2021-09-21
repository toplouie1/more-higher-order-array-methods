const examplePokemonData = require("../data/pokemon_data.js");
const ghostPokemonData = require("../data/ghostPokemon_data");

/**
 *
 *
 *
 * * filterByType
 *
 * Returns a filtered array of only a certain type of pokemon. Should make use of .filter
 * If no pokemon of the given type are found, should return an empty array []
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {Object[]} A filtered array of pokemon objects. Only pokemon of the inputted `type` should be included.
 *
 *  EXAMPLE:
 *  filterByType(examplePokemonData, 'water');
 *  > [
 * ... Squirtle ..., //each of these elements should be a whole object.
 * ... Lapras ...,   //these are just shortened versions for example purposes.
 * ... Poliwag ...,
 * ... Gyarados ...,
 * ... Cloyster ...
 * ]
 */
function filterByType() {}

/**
 *
 *
 *
 * * filterNamesByType
 *
 * * This function is similar to the last one, but this time we want only the pokemon's names, not the whole object.
 * * You will have to make use of .filter AND .map
 *
 * Returns a filtered array of names of only a certain type of pokemon. Should make use of .filter and .map
 * If no pokemon of the given type are found, should return an empty array []
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {string[]} A filtered array of pokemon names. Only pokemon of the inputted `type` should be included.
 *
 * EXAMPLE:
 * filterNamesByType(examplePokemonData, 'water')
 *  > [Squirtle, Lapras, Poliwag, Gyarados, Cloyster]
 */
function filterNamesByType() {}

/**
 *
 *
 *
 * * filterNamesByStrength
 *
 * * This function is similar to the last one, but this time we want to filter by each pokemon's `strongAgainst` property.
 * * You will have to make use of .filter AND .map
 *
 * Returns a filtered array of names of only a certain type of pokemon. Should make use of .filter and .map
 * If no pokemon of the given type are found, should return 'Sorry, could not find any pokemon that are strong against type: "<inputted type>".'
 * @param {Object[]} pokemonArr - An array of pokemon. See the pokemon data for more.
 * @param {string} type - A string representing a pokemon type.
 * @returns {string[]} A filtered array of pokemon names.
 * Only pokemon that have the inputted `type` in their `strongAgainst` property should be included.
 *
 * EXAMPLE:
 * filterNamesByStrength(examplePokemonData, 'ice')
 *  > [Charmander, Onix]
 */
function filterNamesByStrength() {}

module.exports = {
  filterByType,
  filterNamesByType,
  filterNamesByStrength,
};
