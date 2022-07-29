const data = require('../data/zoo_data');

const especies = data.species;

const allAnimals = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

const countAnimals = (animals) => {
  if (typeof animals === 'undefined') return allAnimals;
  if (Object.keys(animals).includes('sex')) {
    const animal = animals.specie;
    const sexo = animals.sex;
    const lista = especies.find((element) => element.name === animal);
    const listaFiltrada = lista.residents.filter((item) => item.sex === sexo).length;
    return listaFiltrada;
  }
  if (!Object.keys(animals).includes('sex')) {
    const animal = animals.specie;
    const lista = especies.find((element) => element.name === animal);
    const listaAtt = lista.residents.length;
    return listaAtt;
  }
};

module.exports = countAnimals;
