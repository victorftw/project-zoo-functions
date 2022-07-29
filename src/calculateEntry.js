const data = require('../data/zoo_data');

const { adult, senior, child } = data.prices;

const countEntrants = (entrants) =>
  entrants.reduce((acc, cliente) => {
    if (cliente.age < 18) {
      acc.child += 1;
    } else if (cliente.age >= 18 && cliente.age < 50) {
      acc.adult += 1;
    } else {
      acc.senior += 1;
    }
    return acc;
  },
  { child: 0, adult: 0, senior: 0 });

const calculateEntry = (entrants) => {
  if (typeof entrants === 'undefined') {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const obj = countEntrants(entrants);
  const crianca = Object.values(obj)[0] * child;
  const adulto = Object.values(obj)[1] * adult;
  const idoso = Object.values(obj)[2] * senior;
  const sum = crianca + adulto + idoso;
  return sum;
};

module.exports = { calculateEntry, countEntrants };
