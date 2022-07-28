const data = require('../data/zoo_data');

const especies = data.species;

const getSpeciesByIds = (...ids) =>
  ids.map((codigo) => especies.find((element) => element.id === codigo));

module.exports = getSpeciesByIds;
