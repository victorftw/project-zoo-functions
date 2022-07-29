const data = require('../data/zoo_data');

const funcionarios = data.employees;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const animais = data.species;

const getSpecies = (id) =>
  animais.find((element) => element.id === id);

const getAnimalBySex = (genero, busca) => {
  const animal = busca.residents.filter((item) => item.sex === genero);
  const animalOlder = animal.reduce((acc, curr) => {
    if (acc.age > curr.age) return acc;
    return curr;
  });
  return Object.values(animalOlder);
};

const getOldestFromFirstSpecies = (id, gen) => {
  const funcionario = funcionarios.find((pessoa) => pessoa.id === id);
  const firstAnimal = funcionario.responsibleFor[0];
  const especie = getSpecies(firstAnimal);
  if (!gen) {
    const animalMix = especie.residents.reduce((acc, curr) => {
      if (acc.age > curr.age) return acc;
      return curr;
    });
    return Object.values(animalMix);
  }
  getAnimalBySex(gen, especie);
};

console.log(getOldestFromFirstSpecies(stephanieId, 'male'));

module.exports = getOldestFromFirstSpecies;
