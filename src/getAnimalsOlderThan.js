const data = require('../data/zoo_data');

const especies = data.species;

const getAnimalsOlderThan = (animal, age) => {
  const item = especies.find((animais) => animais.name === animal);
  return item.residents.every((element) => element.age > age);
};

module.exports = getAnimalsOlderThan;
