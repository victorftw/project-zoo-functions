const data = require('../data/zoo_data');

const pessoas = data.employees;

const getEmployeeByName = (employeeName) => {
  if (!employeeName) return {};
  return pessoas.find((item) => item.firstName === employeeName || item.lastName === employeeName);
};

module.exports = getEmployeeByName;
