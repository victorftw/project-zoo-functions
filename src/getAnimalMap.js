const data = require('../data/zoo_data');

const { species } = data;

const filterBySex = (residents, options) => {
  const { sex } = options;

  if (!sex) {
    return residents;
  }

  return residents.filter((resident) => resident.sex === sex);
};

const sortByName = (residents, options) => {
  const { sorted } = options;

  if (!sorted) {
    return residents;
  }

  return residents.sort();
};

const getAnimalMap = (options = {}) => {
  const animals = species.reduce((acc, animal) => {
    const obj = acc;
    if (!obj[animal.location]) obj[animal.location] = [];
    if (options.includeNames) {
      let { residents } = animal;

      residents = filterBySex(residents, options);

      let onlyNames = residents.map((a) => a.name);
      onlyNames = sortByName(onlyNames, options);

      obj[animal.location].push({ [animal.name]: onlyNames });
    } else {
      obj[animal.location].push(animal.name);
    }
    return obj;
  }, {});
  return animals;
};

module.exports = getAnimalMap;
