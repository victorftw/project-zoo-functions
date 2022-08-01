const data = require('../data/zoo_data');

const pessoas = data.employees;

const animals = data.species;

const allEmployees = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    fullName: 'Wilburn Wishart',
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  },
  {
    id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
    fullName: 'Stephanie Strauss',
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    fullName: 'Sharonda Spry',
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    fullName: 'Ardith Azevado',
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    fullName: 'Emery Elser',
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  },
];

const getAnimals = (animais) =>
  animais.map((animal) => animals.filter((element) =>
    element.id === animal).map((item) => item.name));

const mapAnimals = (animais) =>
  animais.map((animal) => animals.filter((element) =>
    element.id === animal).map((item) => item.location));

const getEmployeesByNameOrId = (info) => {
  if (Object.keys(info).includes('name')) {
    const nome = info.name;
    const pessoa = pessoas.find((element) =>
      element.firstName === nome || element.lastName === nome);
    return pessoa;
  }
  if (Object.keys(info).includes('id')) {
    const ident = info.id;
    const pessoa = pessoas.find((element) =>
      element.id === ident);
    return pessoa;
  }
};

const getEmployeesCoverage = (info) => {
  if (typeof info === 'undefined') return allEmployees;
  if (!getEmployeesByNameOrId(info)) {
    throw new Error('Informações inválidas');
  }
  const pessoa = getEmployeesByNameOrId(info);
  const animaisResp = pessoa.responsibleFor;
  const animais = getAnimals(animaisResp).join(' ');
  const animaisLocation = mapAnimals(animaisResp).join(' ');
  return {
    id: pessoa.id,
    fullName: `${pessoa.firstName} ${pessoa.lastName}`,
    species: animais.split(/\s*\s\s*/),
    locations: animaisLocation.split(/\s*\s\s*/),
  };
};

module.exports = getEmployeesCoverage;
